//Created By Sunil Patel on Date of 01-11-2018

import { Component, OnInit } from '@angular/core';
//import { ImplicitReceiver } from '@angular/compiler';

import { Router } from '@angular/router';
import * as SESSION from 'src/app/services/sessions';

@Component
({
  selector: 'app-login',  
  template: `<router-outlet></router-outlet>`

})
export class AppComponent implements OnInit
{
  showLoader: boolean;
  public parameter='login'
  constructor
  (     
    private router: Router
  ) { }    
  title = 'eDiaSoft';
  ngOnInit() 
  { 
    if(window.localStorage.getItem('strSessionId') === null)
    {
      SESSION.Sessions.Logout();
      this.router.navigate(['/']);
    }
    else
    {
      let getCurUrl : string = '';
      if(window.location.href.indexOf('#') > 0)
      {
        getCurUrl = window.location.href.split('#')[1];
      }      
      if(getCurUrl != '/home' && getCurUrl != '')
      {
        SESSION.Sessions.showTileMenu = false;
        this.router.navigate([getCurUrl]);
      }
      else
      {
        this.router.navigate(['/home']);           
      }
      
    }
  }
}
