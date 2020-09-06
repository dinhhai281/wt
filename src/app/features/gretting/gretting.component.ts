import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gretting',
  templateUrl: './gretting.component.html',
  styleUrls: ['./gretting.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrettingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
