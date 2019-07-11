import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import * as SESSION from 'src/app/services/sessions';
import { menuService } from '../../services/menu.service';
import { debug } from 'util';
import { HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tileMenu',
  templateUrl: './tileMenu.component.html',
  styleUrls: ['./tileMenu.component.scss'],
  providers: [menuService]
})
export class tileMenu implements OnInit 
{
  tileMenus : any = [];
  routeTitle;
  cmbListPage: string = '';
  key:any = 27;
  sidebarToggle: boolean = false;
  public isAdminMenu : boolean = true;
  public showDashboard=false;

 // @Input() menuInfo: any;
 public menuInfo: Array<any> = [];  
  
  constructor(public _globalService: GlobalService, private _menuService: menuService, private router : Router) {   }
 
  // ToggleBar Atuo Hide
 public _sidebarToggle() 
 {    
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', this.sidebarToggle);
  }

  
  ngOnInit()
  {
    this.isAdminMenu = true;
    //routerLinkActive="active"  (click)="_selectItem(item)"
    //this._sidebarToggle();    
  debugger;
    this.menuInfo  = this._menuService.putSidebarJson(); 
    this.menuInfo.push({
      "path": "esv/dashboard",
      "title": "Dashboard",
      "icon": null,
      "routerLink": [
        "/",
        "home",
        "esv/dashboard"
      ]
    })
    this._menuService.loadMenus();
    this._menuService.selectItem(this.menuInfo); 
    //this.tileMenus = SESSION.Sessions.allMenus;
    //console.log(SESSION.Sessions.allMenus);
    console.log("menuInfo",this.menuInfo);
    

  }


  private _selectItem(item) 
  {
    console.log("item",item)
    if(item.title=='Dashboard'){
  
      this.showDashboard=true;
      console.log("if", this.showDashboard);
    }
    debugger;
    this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
    this.isAdminMenu = false;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    debugger;
    if (event.keyCode === this.key) 
    {
     this.cmbListPage = null;
    }
  }
 
 

  _selectItemchange(item)
  {
    debugger;
    let stringPath : string = '';
    this.menuInfo.forEach(element => 
    {
      if(element['title'] == item.target.value)
      {
        stringPath = element['path'];      
        this.isAdminMenu = false;
        this.router.navigate(['/home/' + stringPath]);        
      }
    });
    
    
   // SESSION.Sessions.isAdmin = false;
    //this.router.navigate(['/home']);
  }

  
}


