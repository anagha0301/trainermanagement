import { Component, OnInit } from '@angular/core';
import { ApplicationlistService } from '../applicationlist.service';
@Component({
  selector: 'app-approvedlist',
  templateUrl: './approvedlist.component.html',
  styleUrls: ['./approvedlist.component.css']
})
export class ApprovedlistComponent implements OnInit {
  showImage: boolean = true;

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
    approvedlist=[{
 
      name :'',
      email:'',
      phone:'',
      address:'',
      qualification:'',
      skillset:'',
      current:'',
      designation:'',
      appliedcourse:'',
  
      }]

    toggleImage(): void{
      this.showImage = !this.showImage;
    }
  constructor(private applicationlistService:ApplicationlistService) { }

  ngOnInit(): void {
    console.log("hello")
    let trainerid = localStorage.getItem("id");
    console.log(trainerid)
    this.applicationlistService.getApplicationlis(trainerid).subscribe((data)=>{
      this.approvedlist=JSON.parse(JSON.stringify(data));
      console.log(data)
     
    
  })
  }
}
