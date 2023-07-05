import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="Why It Is Important ?"
    this.secondtagline="marketing";
    this.thirdtagline="Marketing is the process of getting potential clients interested in your  services. "
  }
}
