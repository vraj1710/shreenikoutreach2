import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  fourthtagline:any;
  ngOnInit(): void {
    this.firsttagline=""
    this.secondtagline="shreenik outreach";
    this.thirdtagline="film distribution | marketing | production "
    this.fourthtagline="project co-ordination | film making | branding"
  }

}
