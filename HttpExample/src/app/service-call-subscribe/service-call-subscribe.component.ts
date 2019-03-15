import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../services/http-call.service';

@Component({
  selector: 'service-call-subscribe',
  templateUrl: './service-call-subscribe.component.html',
  styleUrls: ['./service-call-subscribe.component.scss']
})
export class ServiceCallSubscribeComponent implements OnInit {

  public title : any = [];

  constructor(private _httpCallService : HttpCallService) { }

  ngOnInit() {
    this._httpCallService.getTitlesByNormalsubscribercall().subscribe((data)=> {
      this.title = data
    })
  }

}
