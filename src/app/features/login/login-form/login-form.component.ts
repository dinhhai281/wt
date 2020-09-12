import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, NgValidatorsErrors } from '@ngneat/reactive-forms';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { filter, map, startWith, tap, withLatestFrom } from 'rxjs/operators';

export interface LoginFormValue {
  email: string;
  password: string;
}

type NgError = Observable<Partial<NgValidatorsErrors>>;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  @Input()
  set loading(value: boolean) {
    this.loading$.next(value);
  }
  loading$ = new BehaviorSubject<boolean>(false);

  form = this.fb.group<LoginFormValue, NgValidatorsErrors>({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control(''),
  });

  buttonColorClass$ = this.loading$.pipe(
    map(isLoading => ({
      'bg-indigo-400 hover:bg-indigo-500 text-gray-200': !isLoading,
      'bg-gray-300 text-gray-600': isLoading,
    })),
  );

  vm$ = combineLatest([this.getControlErrors('email'), this.loading$, this.buttonColorClass$]).pipe(
    map(([emailError, loading, buttonColorClass]) => ({ emailError, loading, buttonColorClass })),
  );

  submit$ = new Subject<void>();
  @Output() submitForm = this.submit$.pipe(
    tap(this.form.markAllAsTouched.bind(this.form)),
    withLatestFrom(this.form.value$, this.form.status$),
    filter(([, , status]) => status !== 'INVALID'),
    map(([, value]) => value),
  );

  getControlErrors(controlName: keyof LoginFormValue): NgError {
    const control = this.form.getControl(controlName) as FormControl<unknown>;
    return combineLatest([control.errors$ as NgError, control.touch$]).pipe(
      map(([errors, isTouch]) => (isTouch ? errors ?? {} : {})),
      startWith({}),
    );
  }

  ngOnInit() {}

  constructor(private readonly fb: FormBuilder) {}
}
