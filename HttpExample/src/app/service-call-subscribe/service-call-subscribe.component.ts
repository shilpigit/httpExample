import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../services/http-call.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'service-call-subscribe',
  templateUrl: './service-call-subscribe.component.html',
  styleUrls: ['./service-call-subscribe.component.scss']
})
export class ServiceCallSubscribeComponent implements OnInit {

  public title : any = [];
  
  constructor(private _httpCallService : HttpCallService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    
    this._httpCallService.getTitlesByNormalsubscribercall().subscribe((data)=> {
      this.title = data
    }, error => {

    }, () => {
              console.log('This denote complete option.')
    })
  
  }

  activatedLink(id){    
    
    this.route.navigate(['../activateUrl', id], { relativeTo: this.router});
  }

 
}
