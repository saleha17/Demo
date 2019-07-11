//Created By Sunil Patel on Date of 01-11-2018
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Login } from '../services/services.model';   
import * as SESSION from './sessions';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable()
export class loginService 
{
  authUrl: string = SESSION.Sessions.baseUrl + 'KGAPI/';
  
  constructor(private httpClient: HttpClient) { }
  
  authantication(_login:Login) 
  {  
    const httpOptions = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type':  'application/json'
      })
    };
    //console.log(_login);
    try
    {
      //console.log(_login);
      return this.httpClient.post<Login[]>(this.authUrl + 'authantication', _login, httpOptions);
    }
    catch{ return null;}
  }

}

