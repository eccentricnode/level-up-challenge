import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule, SpotifyService, TokenInterceptor } from '@level/core-data';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { LoginComponent } from './login/login.component';
import { SpotifyDetailsComponent } from './spotify/spotify-details/spotify-details.component';
import { SpotifyListComponent } from './spotify/spotify-list/spotify-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, SpotifyComponent, LoginComponent, SpotifyDetailsComponent, SpotifyListComponent],
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
  providers: [
    SpotifyService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
