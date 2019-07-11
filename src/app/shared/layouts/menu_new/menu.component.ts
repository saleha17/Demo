import { Component, Input, OnInit } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import { GlobalService } from '../../services/global.service';
import { menuService } from '../../services/menu.service';

@Component
({
  selector: 'new-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})
export class NewMenuComponent  implements OnInit 
{
  @Input() menuInfo: any;
  @Input() menuInfo2: any;
  
  
  

  constructor(private _globalService: GlobalService, private _menuService : menuService) { }

  ngOnInit()
  {
    //this.menuInfo2 = this._menuService.putSidebarJson2(); 
    //this._menuService.selectItem(this.menuInfo2); 
  }

  private isToggleOn(item) 
  {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) 
  {
    this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}