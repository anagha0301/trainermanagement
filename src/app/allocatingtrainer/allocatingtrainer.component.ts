import { Component, OnInit } from '@angular/core';
import { ApplicationlistService } from '../applicationlist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allocatingtrainer',
  templateUrl: './allocatingtrainer.component.html',
  styleUrls: ['./allocatingtrainer.component.css']
})
export class AllocatingtrainerComponent implements OnInit {

 
  applicationlist=[{
   
    name :'',
    // email:'',
    // phone:'',
    // address:'',
    // qualification:'',
    // skillset:'',
    // current:'',
    // designation:'',
    // appliedcourse:'',
    // imageUrl:''
    }]
    showImage: boolean = true;

    toggleImage(): void{
      this.showImage = !this.showImage;
    }
  constructor(private applicationlistService:ApplicationlistService,private router:Router) { }

 
 
 
  

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.applicationlistService.getApplicationlist().subscribe((data)=>{
      this.applicationlist=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.applicationlistService.editProduct(this.applicationlist);   
    alert("Success");
    this.router.navigate(['/']);
  }
}
