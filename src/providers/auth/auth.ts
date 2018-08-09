import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class AuthProvider {
  
  private url = "http://www.razonlegal.co/api/v1/sessions"

  contentHeader =  new HttpHeaders({
    'Content-Type':  'application/json'
  })

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials){
    return this.http.post(this.url, JSON.stringify({user: credentials}), { headers: this.contentHeader })
      .map(res => res)
  }
}
