import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material'
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { Dota2Component } from './dota2/dota2.component';
import { LoginComponent } from './login/login.component';
import { Dota2ListComponent } from './dota2/dota2-list/dota2-list.component';
import { Dota2DetailsComponent } from './dota2/dota2-details/dota2-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, Dota2Component, Dota2ListComponent, Dota2DetailsComponent],
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
