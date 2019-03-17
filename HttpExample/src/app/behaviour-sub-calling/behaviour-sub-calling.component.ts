import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behaviour-sub-calling',
  templateUrl: './behaviour-sub-calling.component.html',
  styleUrls: ['./behaviour-sub-calling.component.scss']
})
export class BehaviourSubCallingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display()
  {alert('Shilpi');}

}
