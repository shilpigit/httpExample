import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceCallSubscribeComponent } from './service-call-subscribe/service-call-subscribe.component';

import { HttpClientModule } from '@angular/common/http';
import { BehaviourSubCallingComponent } from './behaviour-sub-calling/behaviour-sub-calling.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component'
import { CommonModule } from '@angular/common';
import { ActivatedUrlExampleComponent } from './activated-url-example/activated-url-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceCallSubscribeComponent,
    BehaviourSubCallingComponent,
    PageNotFoundComponentComponent,
    ActivatedUrlExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
