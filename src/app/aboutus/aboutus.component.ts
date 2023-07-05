import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="Who We Are ?"
    this.secondtagline="about us";
    this.thirdtagline="A quick overview about our team and our company"
  }

}
