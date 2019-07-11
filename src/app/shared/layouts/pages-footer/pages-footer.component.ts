import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalService } from '../../services/global.service';
import { Router } from "@angular/router";
import * as SESSION from '../../../services/sessions';

@Component({
  selector: 'pages-footer',
  templateUrl: './pages-footer.component.html',
  styleUrls: ['./pages-footer.component.scss']
})
export class PagesFooterComponent implements OnInit
{

  
  userName: string = window.localStorage.getItem('strEmpName');
  strCurrUserName: string = window.localStorage.getItem('strUserName');
  strBranchName: string = window.localStorage.getItem('strBranchName'); // SESSION.SessionValues.strBranchName;
  strSessionId: string = window.localStorage.getItem('strSessionId');
  intSessionLevel: number = parseInt(window.localStorage.getItem('intSessionLevel'));
    
  constructor
  (
    private _globalService: GlobalService,
    private router: Router,
    private DomSanitizer: DomSanitizer
  ) { }

  ngOnInit()
  {
    this.strBranchName = SESSION.Sessions.GetValue('strBranchName');
    this.userName = SESSION.Sessions.GetValue('strEmpName');
    this.strCurrUserName = SESSION.Sessions.GetValue('strUserName');
    this.strSessionId = SESSION.Sessions.GetValue('strSessionId');
    this.intSessionLevel = parseInt(SESSION.Sessions.GetValue('intSessionLevel'));
  }

  public _logOut() {
    SESSION.Sessions.Logout();
    this.router.navigate(['/']);
  }

}
