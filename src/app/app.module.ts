import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppStoreModule } from '@store/store.module';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppStoreModule],
  bootstrap: [MainComponent],
})
export class AppModule {}
