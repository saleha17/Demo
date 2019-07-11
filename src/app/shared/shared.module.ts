import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProfileComponent } from './components/profile/profile.component';
import {DashboardComponent} from '../home/esv/dashboard/dashboard.component';
import { StoneDetailsComponent } from '../home/esv/stone-details/stone-details.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    AgGridModule.withComponents([])

  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,    
    AlertComponent,    
    ProfileComponent,
    DashboardComponent,
    StoneDetailsComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,    
    AlertComponent,    
    ProfileComponent,
    DashboardComponent,
    StoneDetailsComponent
  ]
})
export class SharedModule { }
