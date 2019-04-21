import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material'
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LoginComponent } from './login/login.component';
import { RocketsListComponent } from './rockets/rockets-list/rockets-list.component';
import { RocketsDetailsComponent } from './rockets/rockets-details/rockets-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, RocketsComponent, LoginComponent, RocketsListComponent, RocketsDetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(), 
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    CoreDataModule,
    HttpClientModule,
    MaterialModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
