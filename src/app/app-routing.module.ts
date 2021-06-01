import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnrollComponent} from './enroll/enroll.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import{CalenderComponent} from './calender/calender.component';
import{SubmitsuccessComponent} from './submitsuccess/submitsuccess.component';
import{ProfileComponent}from './profile/profile.component';

import{ApplicationListComponent} from './application-list/application-list.component';
import { ApprovedlistComponent } from './approvedlist/approvedlist.component';
import { AllocatingtrainerComponent } from './allocatingtrainer/allocatingtrainer.component';

import{ ApprovingtrainerComponent }from './approvingtrainer/approvingtrainer.component'

const routes: Routes = [
  {path:'approvingtrainer',component:ApprovingtrainerComponent},
  {path:'enroll',component:EnrollComponent},
  {path:'calender',component:CalenderComponent},
  {path:'submitsuccess',component:SubmitsuccessComponent},
  {path:'profile',component:ProfileComponent},
  {path:'applicationlist',component:ApplicationListComponent},
  {path:'approvedlist',component:ApprovedlistComponent},
 
  {path:'allocatingtrainer',component:AllocatingtrainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   
  exports: [RouterModule]
})
export class AppRoutingModule { }
