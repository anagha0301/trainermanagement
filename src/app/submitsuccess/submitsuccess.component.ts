import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitsuccess',
  templateUrl: './submitsuccess.component.html',
  styleUrls: ['./submitsuccess.component.css']
})
export class SubmitsuccessComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
