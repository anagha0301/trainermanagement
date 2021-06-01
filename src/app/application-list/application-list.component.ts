import { Component, OnInit } from '@angular/core';
// import{Router} from '@angular/router';
import { ApplicationlistService } from '../applicationlist.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  showImage: boolean = true;

  applicationlist=[{
 
    name :'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    current:'',
    designation:'',
    appliedcourse:'',
    imageUrl:''
    }]
    // approvedlist=[{
    //   id:'',
    //   type:'',
    //   name :'',
    //   email:'',
    //   phone:'',
    //   qualification:'',
    //   skillset:'',
    //   appliedcourse:'',
    
    //   }]
    toggleImage(): void{
      this.showImage = !this.showImage;
    }
  constructor(private applicationlistService:ApplicationlistService ,private router: Router) { }

  ngOnInit(): void {
    this.applicationlistService.getApplicationlist().subscribe((data)=>{
      this.applicationlist=JSON.parse(JSON.stringify(data));
      console.log(this.applicationlist)
    })
  }
 
   
   singlelist(applicationlist:any)
    {
      localStorage.setItem("id", applicationlist._id.toString());
      console.log(applicationlist._id);
      const myData = localStorage.getItem("id");
      console.log(myData);
      this.router.navigate(['/approvedlist']);
    }
 
  

}
