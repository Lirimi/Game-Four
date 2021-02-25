import { Component, OnInit } from '@angular/core';
import { Board } from './board/board';
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

  constructor(public board: Board) { }

  ngOnInit(): void {
    this.columns = config.axes.columns;
    this.rows = config.axes.rows;
    this.color1 = config.colors.red;
    this.color2 = config.colors.blue;
  }


  clickCell(i: number){
    console.log(i);
    this.board.playAndNext(i, this.board.nextPlayer);
  }

}
