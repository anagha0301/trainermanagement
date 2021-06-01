import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showImage: boolean = true;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
