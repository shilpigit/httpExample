import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private _httpCall: HttpClient) { }

  getTitlesByNormalsubscribercall()
  {
    return this._httpCall.get('https://jsonplaceholder.typicode.com/posts');
  }
}
