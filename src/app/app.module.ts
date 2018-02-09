import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GraphQLModule} from './apollo.config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
