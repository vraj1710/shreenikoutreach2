import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="Who we are ?"
    this.secondtagline="PageNotFound";
    this.thirdtagline="We are here to help and answer any question you might have.we look forward to hearing from you"
  }

}
