import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() myData1: any;
  @Input() myData2: any;
  @Input() myData3: any;
  @Input() myData4: any;
  heading1:any
  heading2:any
  heading3:any
  heading4:any
  ngOnInit(): void {
    this.heading1=this.myData1;
    this.heading2=this.myData2;
    this.heading3=this.myData3;
    this.heading4=this.myData4;
  }

}
