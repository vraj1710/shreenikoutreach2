import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  constructor() { }
  firsttagline:any;
  secondtagline:any;
  thirdtagline:any;
  ngOnInit(): void {
    this.firsttagline="What Exactly Does A Distributor Do ?"
    this.secondtagline="Distribution";
    this.thirdtagline="Film distribution is the process of making a movie available for viewing by an audience."
  }
}
