import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ModalConfigComponent } from '../modal-config/modal-config.component';
import { Board } from './board/board';
import { Config } from './config';
import { interval, Subscription } from 'rxjs';




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
  isRobot: boolean = false;
  subscription!: Subscription;
  getClicks: number = 0; 
 

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
    this.isRobot = this.config.getIsRobot();

    if(window.innerWidth < 900){
      this.hideEffect = true;
    }
    else{
      this.hideEffect = false;
    }    

  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }


 
  
  clickCell(i: number){
    if(this.board.isRobotTurn){
      return;
    }
    if(this.isRobot){
      this.board.playAndNext(i, this.board.nextPlayer, true);
      this.robot(3000);
    }
    else{
      this.board.playAndNext(i, this.board.nextPlayer, false);
    }    
  }

  onHover(i: number){
    this.mouseEnter = true;
    this.getColumn = i;
  }

  offHover(i: number){
    this.mouseEnter = false;
    this.getColumn = i;
  }



  roboticMovement(): number{
        return Math.floor((Math.random() * 7));
  }

  async robot(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.board.playAndNext(this.roboticMovement(), this.board.nextPlayer, false));
}




}
