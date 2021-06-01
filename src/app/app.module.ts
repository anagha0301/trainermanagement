import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import{FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollComponent } from './enroll/enroll.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalenderComponent } from './calender/calender.component';
import { SubmitsuccessComponent } from './submitsuccess/submitsuccess.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApprovedlistComponent } from './approvedlist/approvedlist.component';





import { AllocatingtrainerComponent } from './allocatingtrainer/allocatingtrainer.component';
import { ApprovingtrainerComponent } from './approvingtrainer/approvingtrainer.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrollComponent,
    SidebarComponent,
    CalenderComponent,
    SubmitsuccessComponent,
    ProfileComponent,
    ApplicationListComponent,
  
    ApprovedlistComponent,
  
    AllocatingtrainerComponent,
       ApprovingtrainerComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
