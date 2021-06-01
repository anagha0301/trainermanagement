import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
   
  
  }

}
