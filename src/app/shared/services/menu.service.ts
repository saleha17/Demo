import { Injectable , Component, OnInit } from '@angular/core';
import * as MENUS from '../../home/menu';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';
//import { equalParamsAndUrlSegments } from 'node_modules - Copy/@angular/router/src/router_state';
import { MasterService } from 'src/app/services/master.service';

@Injectable()
export class menuService   
{
  intSessionLevel: number = parseInt(window.localStorage.getItem('intSessionLevel'));
  PARENT_MENUS: any;
  CHILD_MENUS: any;
  ALL_MENUS: any;

  constructor(public _globalService: GlobalService, private _router: Router, private masterservice: MasterService) {


    this.intSessionLevel = parseInt(window.localStorage.getItem('intSessionLevel'));
    
    this.PARENT_MENUS = [];
    this.CHILD_MENUS = [];
    let rowNumber: any = -1;    
    let result: any;

    this.masterservice.GetDataFromMenuMaster().subscribe(data =>
    {
      result = data
      if (result != null) {
        result.forEach(element =>
        {
          let tmpStr: String = element['MENU_P_PATH'].toString();
          let tmpMenuLvlStr: String = element['MENU_LEVEL'].toString();
          if (!this.PARENT_MENUS.some((item) => item.path == tmpStr) && tmpMenuLvlStr == this.intSessionLevel.toString())
          {
            this.PARENT_MENUS.push(
            {
              path: element['MENU_P_PATH'],
              title: element['MENU_P_TITLE'],
              icon: element['MENU_P_ICON'],
              children: []
            });            
            rowNumber++;             
          }
          if (this.PARENT_MENUS.some((item) => item.path == tmpStr))
          {
            this.PARENT_MENUS[rowNumber].children.push(
            {
              path: element['MENU_C_PATH'],
              title: element['MENU_C_TITLE'],
              icon: element['MENU_C_ICON']
            });
            this.CHILD_MENUS.push({
              path:  element['MENU_P_PATH'] + element['MENU_C_PATH'],
              title: element['MENU_C_TITLE'],
              icon: element['MENU_C_ICON']
            });
          }          
        });        
      }
      else
      {
        this.PARENT_MENUS = [];
        let rowNumber: any = -1;
        let result: any;
      }
      this.loadMenus();
     });
  
  }
  


  loadMenus()
  {

    //console.log("This Menu");
    //console.log(this.PARENT_MENUS);
    //console.log("Menu Ts Menu");
    //console.log(MENUS.LAB_MENU_ITEM);

    //this.getNodePath(this.PARENT_MENUS);  
    this.getNodePath(this.CHILD_MENUS);  
  }
  private parent_node = null;
  private node = null;
  private path_item = [];

  protected queryParentNode(json: any, node_id: any) 
  {
    for (let i = 0; i < json.length; i++) 
    {
      if (this.node)
        break;
      const object = json[i];
      if (!object || !object.path)
        continue;
      if (object.path === node_id) 
      {
        this.node = object;
        break;
      } 
      else 
      {
        if (object.children) 
        {
          this.parent_node = object;
          this.queryParentNode(object.children, node_id);
        } else { continue; }
      }
    }
    if (!this.node)
      this.parent_node = null;
    return {
      parent_node: this.parent_node,
      node: this.node
    };
  }

  protected creatRouterLink(nodeId: any) 
  {
    this.node = null;
    this.parent_node = null;
    //const menuObj = this.queryParentNode(this.PARENT_MENUS, nodeId);
    const menuObj = this.queryParentNode(this.CHILD_MENUS, nodeId);
    if (menuObj.parent_node && menuObj.parent_node.path) 
    {
      this.path_item.unshift(menuObj.parent_node.path);
      return this.creatRouterLink(menuObj.parent_node.path);
    }
    else 
    {
      return this.path_item;
    }
  }

  protected getNodePath(json: any): void 
  {
    json.forEach((index) => 
    {
      if (index.children) 
      {
        //delete index.routerLink;
        this.getNodePath(index.children);
        index.toggle = 'init';
      } 
      else 
      {
        this.path_item = [index.path];
        index.routerLink = this.creatRouterLink(index.path);
        index.routerLink.unshift('/', 'home');
      }
    })
  }

  public putSidebarJson() 
  {
    //return this.PARENT_MENUS | 
    return this.CHILD_MENUS;
  }

  public selectItem(item) 
  {
    item.forEach(element => 
      {
      if (element.routerLink) 
      {
        element.isActive = this._router.isActive(this._router.createUrlTree(element.routerLink), true);
        if (element.isActive) //this._globalService._isActived(element);
          this._globalService.dataBusChanged('isActived', element);
      } else if (element.children)
        this.selectItem(element.children);
    });
  }

}
