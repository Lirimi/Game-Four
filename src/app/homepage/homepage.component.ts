import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import config from './config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
  columns: number = 0;
  rows: number = 0;
  color1: string = '';
  color2: string = '';

  constructor() { }

  ngOnInit(): void {
    this.columns = config.axes.columns;
    this.rows = config.axes.rows;
    this.color1 = config.colors.red;
    this.color2 = config.colors.blue;
  }

  counter(i:number){
    return new Array(i);
  }

}
