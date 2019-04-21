import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LoginComponent } from './login/login.component';
import { RocketsListComponent } from './rockets-list/rockets-list.component';
import { RocketsDetailsComponent } from './rockets-details/rockets-details.component';

@NgModule({
  declarations: [AppComponent, RocketsComponent, LoginComponent, RocketsListComponent, RocketsDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
