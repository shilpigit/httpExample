import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpCallService } from '../services/http-call.service';

@Component({
  selector: 'activated-url-example',
  templateUrl: './activated-url-example.component.html',
  styleUrls: ['./activated-url-example.component.scss']
})
export class ActivatedUrlExampleComponent implements OnInit {  

  public id: string;
  public body: string;
  public error:string='';

  constructor(private _route: ActivatedRoute, private _httpCallService : HttpCallService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id");   
  }

  onSearch(value: string)
  {  
    
    // ******************** commented line also correct *****************************************
    // this._httpCallService.getBodyById(value).subscribe((data=>
    //   {
    //    this.body = data
    //   })) 
    
    this._route.paramMap.subscribe((params: ParamMap) => {
      params.get('id');
      this._httpCallService.getBodyById(params.get('id')).subscribe((data)=> {
        this.body = data
      }, 
        error => {
          this.error = error
        }
      )
    });
  }

}
