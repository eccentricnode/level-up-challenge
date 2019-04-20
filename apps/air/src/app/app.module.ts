import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';

import { CoreDataModule } from '@level/core-data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirComponent } from './air/air.component';
import { LoginComponent } from './login/login.component';
import { AirListComponent } from './air/air-list/air-list.component';
import { AirDetailsComponent } from './air/air-details/air-details.component';

@NgModule({
  declarations: [AppComponent, AirComponent, LoginComponent, AirListComponent, AirDetailsComponent],
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
