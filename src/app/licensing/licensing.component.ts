import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licensing',
  templateUrl: './licensing.component.html',
  styleUrls: ['./licensing.component.css']
})
export class LicensingComponent implements OnInit {
  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="Want To Publish Content ?"
    this.secondtagline="licensing";
    this.thirdtagline="Content licensing allows you to publish the content on various platform"
  }

}
