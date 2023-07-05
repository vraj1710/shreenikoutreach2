import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="Get in Touch with Us"
    this.secondtagline="contact us";
    this.thirdtagline="We are here to help and answer any question you might have.we look forward to hearing from you"
  }

}
