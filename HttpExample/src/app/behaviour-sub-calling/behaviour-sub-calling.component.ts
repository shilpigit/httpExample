import { Component, OnInit } from '@angular/core';
import { HttpCallServiceBySubscriberService } from '../services/http-call-service-by-subscriber.service';

@Component({
  selector: 'app-behaviour-sub-calling',
  templateUrl: './behaviour-sub-calling.component.html',
  styleUrls: ['./behaviour-sub-calling.component.scss']
})
export class BehaviourSubCallingComponent implements OnInit {

  public observable: any=[];
  public idn: number;

  constructor(private _httpCallservice: HttpCallServiceBySubscriberService) { }

  ngOnInit() {
  }

  display(id: number)
  {
    debugger
    alert(id);
    this._httpCallservice.getTitlesByNormalsubscribercall().subscribe((data)=>{
    this._httpCallservice.setList(1)
    })
  }

}
