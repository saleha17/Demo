import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'node_modules/hammerjs/hammer.js';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { AgGridModule } from 'ag-grid-angular';

import { NgxSpinnerModule } from 'ngx-spinner';
//import { AgGridModule } from "ag-grid-angular";
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//import {DataTableModule} from "angular-6-datatable";
import { TextMaskModule } from 'angular2-text-mask';
import {NgxMaskModule} from 'ngx-mask'
import { NgSelectModule } from 'ng-custom-select';
import { LayoutModule } from  '../app/shared/layout.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { route } from './app.routing';
import { loginService } from './services/login.services';
import { LoaderInterceptorService } from './services/loader/loader-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { from } from 'rxjs';
/*
import { LoginComponent } from './login/login.component';
import { MdiComponent } from './home/mdi/mdi.component';
import { HomeComponent } from './home/home.component';
*/
@NgModule
({
  declarations: 
  [
    AppComponent,
    //CustomDateComponent
    //MdiComponent,
    //HomeComponent,
    //LoginComponent,
  ],
  imports: 
  [    
    BrowserModule,    
    FormsModule,   
    route,
    LayoutModule,     
    HomeModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    RouterModule,    
    HttpClientModule,
    NgSelectModule,
    NgbModule,
    NgxSpinnerModule,    
    TextMaskModule,
    NgxMaskModule.forRoot(),
    //AgGridModule.withComponents([CustomDateComponent]),
    //Ng4LoadingSpinnerModule.forRoot()
    //DataTableModule,
  ],  
  providers:
  [
    loginService,
     
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
      }      
    ],  
  bootstrap: [AppComponent],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }

