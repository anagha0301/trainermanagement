import { Component, OnInit } from '@angular/core';
import { ApplicationlistService } from '../applicationlist.service';
import { Router } from '@angular/router';

declare var jQuery:any;
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private applicationlistService:ApplicationlistService,private router: Router) { }
  applicationlist={
    name :'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    current:'',
    designation:'',
    appliedcourse:'',
    // imageUrl:''
    }
 
  ngOnInit(){
  
  }
  Enroll()
  {   
    this.applicationlistService.newApplicationlist(this.applicationlist);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/submitsuccess']);
  }
}
