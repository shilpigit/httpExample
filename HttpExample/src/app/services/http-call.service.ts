import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private _httpCall: HttpClient) { }

  getTitlesByNormalsubscribercall()
  {
    return this._httpCall.get('https://jsonplaceholder.typicode.com/posts');
  }

  getBodyById(id): Observable<any> 
  {
    debugger
    return this._httpCall.get('https://jsonplaceholder.typicode.com/posts?id='+id
    );
  }
}
