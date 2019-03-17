import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallServiceBySubscriberService {

  _behavioursub = new BehaviorSubject([]);

  constructor(private _httpBehaviorCall: HttpClient) { }

  getTitlesByNormalsubscribercall()
  {
    return this._httpBehaviorCall.get('https://jsonplaceholder.typicode.com/posts');
  }

  setList(input: any)
  {
    this._behavioursub.next(input);
  }
}
