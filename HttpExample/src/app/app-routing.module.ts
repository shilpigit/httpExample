import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BehaviourSubCallingComponent } from './behaviour-sub-calling/behaviour-sub-calling.component';
import { ServiceCallSubscribeComponent } from './service-call-subscribe/service-call-subscribe.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ActivatedUrlExampleComponent } from './activated-url-example/activated-url-example.component';

const routes: Routes = [
  { path:'behaviour', component:BehaviourSubCallingComponent },
  {path:'subject', component:ServiceCallSubscribeComponent},  
  {path:'activateUrl/:id', component:ActivatedUrlExampleComponent},
  {path:'', redirectTo:'/behaviour', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
