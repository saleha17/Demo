//Created By Sunil Patel on Date of 01-11-2018

import {Router } from "@angular/router";
export class Sessions
{
    static baseUrl : string = 'http://192.168.101.8:98/api/';// Live SP API Link    
    static router : Router;
    static strCompanyName : string  = 'K Girdharlal';
    static strSessionId : string  = 'SessionId';
    static intSessionLevel: number = 0;
    static strUserId: string = '';
    static strUserName  : string = 'UserId';
    static strCoid : string  = '';
    static strBrid  : string = '';
    static strBranchName  : string = '';
    static strBarcode  : string  = '';
    static strLvl_Flg  : string  = '';
    static strLvl_ID   : string = '';
    static strGrp_ID  : string  = '';
    static strNode_ID  : string  = '';
    static strEntity_ID  : string  = '';
    static strDept_Node_ID: string = '';
    static strUserImg: string = '';
    public static showTileMenu : boolean = true;
    public static menuArray: any;
    public static allMenus : any;
    private static AllData : any[] = [
                                      {name:'strCompanyName', type:'string'}, 
                                      {name:'strSessionId', type:'string'},
                                      {name:'intSessionLevel', type: 'number'},
                                      {name:'strUserId', type: 'string' },
                                      {name:'strUserName', type:'string'},
                                      {name:'strEmpName', type:'string'},
                                      {name:'strCoid', type:'string'},
                                      {name:'strBrid', type:'string'},
                                      {name:'strBranchName', type:'string'},
                                      {name:'strBarcode', type:'string'},
                                      {name:'strLvl_Flg', type:'string'},
                                      {name:'strLvl_ID', type:'string'},
                                      {name:'strGrp_ID', type:'string'},
                                      {name:'strNode_ID', type:'string'},
                                      {name:'strEntity_ID', type:'string'},
                                      {name:'strDept_Node_ID', type: 'string'},
                                      {name:'strUserImg', type: 'string'}
                                     ];



    static SetValues(data: string[]) 
    {   
        this.AllData.forEach(element => 
        {
            try
            {                          
                window.localStorage.setItem(element.name, data[element.name]);                
                if(data[element.name]!==undefined)
                {
                    if(element.type == 'string')
                        this[element.name] = data[element.name];  
                    else if(element.type == 'number')
                        this[element.name]  = parseInt(data[element.name]);
                    else if(element.type == 'float')
                        this[element.name]  = parseFloat(data[element.name]);
                }                
            }
            catch(e)
            {
                console.log("Set Values Error : " + e)
            }
        });        
    }

    static SetValue(SessionName: string, SessionValue: string)    
    {
        try { return window.localStorage.setItem(SessionName, SessionValue); }catch(e){console.log("Set Value Error : " + e)}      
    }

    static GetValue(data: string)    
    {
        try { return window.localStorage.getItem(data); }catch(e){console.log("Get Value Error : " + e)}      
    }

    static RemoveValue(data: string)
    {
        try { return window.localStorage.removeItem(data); }catch(e){console.log("Remove Value Error : " + e)}      
    }

    static Logout()
    {       
        try
        { 
            this.RemoveValue('strCompanyName');
            this.RemoveValue('strSessionId');
            this.RemoveValue('intSessionLevel');
            this.RemoveValue('strUserName');
            this.RemoveValue('strEmpName');
            this.RemoveValue('strCoid');
            this.RemoveValue('strBrid');
            this.RemoveValue('strBranchName');
            this.RemoveValue('strBarcode');
            this.RemoveValue('strLvl_Flg');
            this.RemoveValue('strLvl_ID');
            this.RemoveValue('strGrp_ID');
            this.RemoveValue('strNode_ID');
            this.RemoveValue('strEntity_ID');
            this.RemoveValue('strDept_Node_ID');
            this.RemoveValue('strUserImg');
        }
        catch(e)
        {
            console.log("Logout Error : " + e)
            //alert("Error :" + e);
        }
    }


  static setDataCoumns(columnDefs : any, dataSource : any, startPos : number, endPos : number)
  {
    try
    {
      let firstRow = 0;
      for (let rows of dataSource)
      {
        if (firstRow == 0)
        {
          let thisPos = 0;
          for (var cols in rows)
          {
            if (thisPos >= startPos && (endPos == 0 || thisPos <= endPos)) 
            {
              columnDefs.push(
             {
                headerName: cols.replace(/_/g, " ").toString(),
                width: 100, field: cols, suppressSizeToFit: true
              });
            }
            thisPos++;
          }
        } else { break; }
        firstRow++;
      }
    }
    catch (e)
    {
      console.log("setDataCoumns Error : " + e)
    }
  }

  

  static setBandedDataCoumns(bandPosition: number, bandName: string, columnDefs: any, dataSource: any, startPos: number, endPos: number)
  {
    try
    { 
      let firstRow = 0;
      for (let rows of dataSource)
      {
        if (firstRow == 0)
        {
          columnDefs.push({ headerName: bandName.replace(/_/g, " ").toString(), children: [] });
          let thisPos = 0;
          for (var cols in rows)
          {
            if (thisPos >= startPos && (endPos == 0 || thisPos <= endPos))
            {
              if (columnDefs.some((item) => item.headerName == bandName.replace(/_/g, " ").toString()))
              {
                columnDefs[bandPosition].children.push(
                {
                  headerName: cols.replace(/_/g, " ").toString(),
                  field: cols, width: 100, suppressSizeToFit: true
                });
              }   

            }
            thisPos++;
          }
        } else { break; }
        firstRow++;
      }
    }
    catch (e) {
      console.log("setBandedDataCoumns Error : " + e)
    }
  }


  static copyToClipboard(item : string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
