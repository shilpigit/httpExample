import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallServiceBySubscriberService {

  _behavioursub = new BehaviorSubject([]);

  constructor(private _httpBehaviorCall: HttpClient) { }

  setList(input: any)
  {
    this._behavioursub.next(input);
  }
}
