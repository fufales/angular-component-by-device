import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingLpComponent } from './testing-lp/testing-lp.component';
import { TestingLpMobileComponent } from './testing-lp-mobile/testing-lp-mobile.component';
import { TestingLpDesktopComponent } from './testing-lp-desktop/testing-lp-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingLpComponent,
    TestingLpMobileComponent,
    TestingLpDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
