import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { Youtube_API } from "./services/youtube.service";
import { Youtube_Url } from "./services/youtube.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchboxComponent } from './core/searchbox/searchbox.component';
import { SearchresultComponent } from './core/searchresult/searchresult.component';
import { YoutubesearchComponent } from './core/youtubesearch/youtubesearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    SearchresultComponent,
    YoutubesearchComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
    
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [
    {provide: Youtube_API, useValue: "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk"},
    {provide: Youtube_Url, useValue: "https://www.googleapis.com/youtube/v3/search"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
