import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvingtrainer',
  templateUrl: './approvingtrainer.component.html',
  styleUrls: ['./approvingtrainer.component.css']
})
export class ApprovingtrainerComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
