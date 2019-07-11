import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalService } from '../../services/global.service';
import {Router } from "@angular/router";
import * as SESSION from '../../../services/sessions';
import { debug } from 'util';
@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements OnInit
{
  strAvatarImgSrc: string = window.localStorage.getItem('strUserImg');
  boolAvatarImgSrc: boolean = false;
  imageSrc: any = null;
  userPost: string = 'K Girdharlal';
  userName: string = window.localStorage.getItem('strEmpName');
  strCurrUserName: string = window.localStorage.getItem('strUserName');
  strBranchName: string = window.localStorage.getItem('strBranchName'); // SESSION.SessionValues.strBranchName;
  strSessionId: string = window.localStorage.getItem('strSessionId');
  intSessionLevel: number = parseInt(window.localStorage.getItem('intSessionLevel'));
  strCurrWorkingArea : string = "GENERAL";
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor
  (
    private _globalService: GlobalService,      
    private router: Router,
    private DomSanitizer : DomSanitizer
  ) { }

  ngOnInit() 
  {
    
    this.strBranchName = SESSION.Sessions.GetValue('strBranchName');
    this.userName = SESSION.Sessions.GetValue('strEmpName');
    this.strCurrUserName = SESSION.Sessions.GetValue('strUserName');
    this.strAvatarImgSrc = window.localStorage.getItem('strUserImg');
    this.imageSrc = this.DomSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.strAvatarImgSrc);
    this.boolAvatarImgSrc = this.strAvatarImgSrc.length > 3 ? true : false;
    this.strSessionId = SESSION.Sessions.GetValue('strSessionId');
    this.intSessionLevel = parseInt(SESSION.Sessions.GetValue('intSessionLevel'));
    switch (this.intSessionLevel)
    {
      case 999: this.strCurrWorkingArea = "ADMIN"; break;
      case 0: this.strCurrWorkingArea = "GENERAL"; break;
      case 1: this.strCurrWorkingArea = "STORE"; break;
      case 2: this.strCurrWorkingArea = "PREDICT"; break;
      case 3: this.strCurrWorkingArea = "LAB"; break;
    }
  }

  public _sidebarToggle() 
  {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */
    SESSION.Sessions.showTileMenu = true;
    window.location.href = '/#/home';

    // this._globalService.data$.subscribe(data =>
    // {
    //   if (data.ev === 'sidebarToggle')
    //   {
    //     this.sidebarToggle = data.value;
    //   }
    // }, error =>
    //   {
    //   console.log('Error: ' + error);
    // });
    // this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);

  }
  
  public _logOut()
  { 
    SESSION.Sessions.Logout();      
    this.router.navigate(['/']);     
  }

  _ToHome()
  {
    debugger;
    SESSION.Sessions.showTileMenu = true;
    window.location.href = '/#/home';
    window.location.reload(true);    
  }

}
