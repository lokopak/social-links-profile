import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialLinksModule } from './modules/social-links/social-links.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocialLinksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
