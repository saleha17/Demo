import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//import { BrowserModule } from '@angular/platform-browser';
/* components */
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';


//General 
import { GeneralComponent } from './mdi/general/general.component';

//Predict
import { PredictComponent } from './mdi/predict/predict.component';

//Store
import { StoreComponent } from './mdi/store/store.component';

//exta moduls
import { DataTableModule } from 'angular-6-datatable';
// import { AgGridModule } from 'ag-grid-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';

import * as NgxEcharts from 'ngx-echarts';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import { MdiComponent } from './mdi/mdi.component';

// import { StoneDetailsComponent } from './esv/stone-details/stone-details.component';
// import { DashboardComponent } from './esv/dashboard/dashboard.component';


@NgModule
({
    imports: 
    [
        //BrowserModule,
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        NgxEcharts.NgxEchartsModule,
        NgxMatDrpModule,
        FormsModule,
        ReactiveFormsModule,
        Ng4LoadingSpinnerModule.forRoot(),
        NgxSpinnerModule,
        DataTableModule,    
        // AgGridModule.withComponents([]),
        MDBBootstrapModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    declarations: 
    [
        HomeComponent,
        LoginComponent, 
        MdiComponent, 
        //General
        GeneralComponent, 
        //Predict
        PredictComponent,

        //Store
        StoreComponent,

        // StoneDetailsComponent,

        // DashboardComponent, 

          
    ]
})
export class HomeModule { }
