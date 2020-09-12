import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostEffects } from '@entity/post/post.effect';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true,
      },
    }),
    environment.storeInstrument,
    EffectsModule.forRoot([PostEffects]),
  ],
  bootstrap: [MainComponent],
})
export class AppModule {}
