import { Component, OnInit, HostListener, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ModalConfigComponent } from '../modal-config/modal-config.component';
import { Board } from './board/board';
import { Config } from './config';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  columns: number = 0;
  rows: number = 0;
  color1!: string;
  color2!: string;
  mouseEnter: boolean = false;
  getColumn!: number;
  hideEffect: boolean = false;
 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth < 900){
      this.hideEffect = true;
    }
    else{
      this.hideEffect = false;
    }
  }
  constructor(public board: Board,
    public config: Config) { }

  ngOnInit(): void {
      
    this.color1 = this.config.getPlayer1Color();
    this.color2 = this.config.getPlayer2Color();

    if(window.innerWidth < 900){
      this.hideEffect = true;
    }
    else{
      this.hideEffect = false;
    }

  }

 
  
  clickCell(i: number){
    console.log(i);
    this.board.playAndNext(i, this.board.nextPlayer);
    
  }

  onHover(i: number){
    this.mouseEnter = true;
    this.getColumn = i;
    console.log(this.getColumn);
  }

  offHover(i: number){
    this.mouseEnter = false;
    this.getColumn = i;
  }







}
