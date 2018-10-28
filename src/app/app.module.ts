import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelsComponent } from './hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
