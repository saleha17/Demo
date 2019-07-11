import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as SESSION from 'src/app/services/sessions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  MasUrl: string = SESSION.Sessions.baseUrl + 'Master/';

  constructor(private httpClient: HttpClient)
  {

  }

  GetUserRightMasterDet()
  {
    return this.httpClient.get(this.MasUrl + 'GetUserRightMasterDet');
  }

  GetAllWebAccessUser() {
    return this.httpClient.get(this.MasUrl + 'GetAllWebAccessUser');
  }

  GetEmpWiseUserRightData(emp_id : string) {
    return this.httpClient.get(this.MasUrl + 'GetEmpWiseUserRightData', { params: { p_emp_id: emp_id} });
  }

  GetAllMenuData() {
    return this.httpClient.get(this.MasUrl + 'GetAllMenuData');
  }

  SaveUserRightMasData(objListOfData: any): Observable<any> {
    const httpOptions =
    {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };
    return this.httpClient.post(this.MasUrl + 'SaveUserRightMasData', objListOfData, httpOptions);
    //return this.httpClient.get(this.MasUrl + 'SaveUserRightMasData', objListOfData);
  }

  DelUserRightMasData(objListOfData: any): Observable<any> {
    const httpOptions =
    {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };
    return this.httpClient.post(this.MasUrl + 'DeleteUserRightMasData', objListOfData, httpOptions);
  }

  GetDataFromMenuMaster() {
    let user_id = SESSION.Sessions.GetValue('strSessionId');
    var tmpData = this.httpClient.get(this.MasUrl + 'GetDataFromMenuMaster', { params: { p_user_id: user_id } });
    return tmpData;
  }

  SaveMenuMasData(objListOfData: any): Observable<any> {
    const httpOptions =
    {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };
    return this.httpClient.post(this.MasUrl + 'SaveMenuMasData', objListOfData, httpOptions);
    //return this.httpClient.get(this.MasUrl + 'SaveUserRightMasData', objListOfData);
  }

  DeleteMenuMasData(objListOfData: any): Observable<any> {
    const httpOptions =
    {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };
    return this.httpClient.post(this.MasUrl + 'DeleteMenuMasData', objListOfData, httpOptions);
  }
}
