import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import * as SESSION from '../../../services/sessions';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit 
{
  intSessionLevel : number = 0;
  isConfigToggle: boolean = false;  
  isSelectedGeneral : boolean = true;
  isSelectedStore : boolean = false;
  isSelectedPredict : boolean = false;
  isSelectedLab : boolean = false;
  strCurrentUserName: string = "";
  strChangePass : string = '/mdi/changepass';
  constructor(private _globalService: GlobalService,private router: Router
    ) 
  {
    this.intSessionLevel = parseInt(window.localStorage.getItem('intSessionLevel'));
    this.strCurrentUserName = window.localStorage.getItem('strUserName');
  }
  
  ngOnInit() 
  {    
    this.isSelectedGeneral = this.intSessionLevel === 0 ? true : false;
    this.isSelectedStore = this.intSessionLevel === 1 ? true : false;
    this.isSelectedPredict = this.intSessionLevel === 2 ? true : false;    
    this.isSelectedLab = this.intSessionLevel === 3 ? true : false;    
  }

  configToggle() 
  {
    this.isConfigToggle = !this.isConfigToggle;
    this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);    
  }

  refresh(intSessionLvl: number): void 
  {
    this.intSessionLevel = intSessionLvl; 
    window.localStorage.setItem('intSessionLevel', this.intSessionLevel.toLocaleString());    
    this.isSelectedGeneral = this.intSessionLevel === 0 ? true : false;
    this.isSelectedStore = this.intSessionLevel === 1 ? true : false;
    this.isSelectedPredict = this.intSessionLevel === 2 ? true : false;
    this.isSelectedLab = this.intSessionLevel === 3 ? true : false; 
    window.location.href = '/#/home';
    window.location.reload(true);
  }
  gotoLogin(){
    this.router.navigate(['/login',{parameter:'forgotPassword'}]);
  }
}
