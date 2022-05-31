import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgDonughtModule } from 'svg-donught';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SvgDonughtModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
