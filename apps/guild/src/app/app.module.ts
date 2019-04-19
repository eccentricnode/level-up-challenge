import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { GuildComponent } from './guild/guild.component';
import { LoginComponent } from './login/login.component';
import { GuildListComponent } from './guild/guild-list/guild-list.component';
import { GuildDetailsComponent } from './guild/guild-details/guild-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, GuildComponent, LoginComponent, GuildListComponent, GuildDetailsComponent],
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
