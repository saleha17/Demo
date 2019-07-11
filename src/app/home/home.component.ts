import { Component, OnInit } from '@angular/core';
import * as SESSION from '../services/sessions';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  showTileMenu : boolean = true;
  isAdmin = false;
  loaderUrl : string = '<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />';

  ngOnInit()
  {
    if(!SESSION.Sessions.showTileMenu)
    {
      this.showTileMenu = false
    }
  }
}



