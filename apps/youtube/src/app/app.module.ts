import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';

import { CoreDataModule } from '@level/core-data';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { LoginComponent } from './login/login.component';
import { YoutubeListComponent } from './youtube/youtube-list/youtube-list.component';
import { YoutubeDetailsComponent } from './youtube/youtube-details/youtube-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, YoutubeComponent, LoginComponent, YoutubeListComponent, YoutubeDetailsComponent],
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
