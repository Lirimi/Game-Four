import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Config } from '../homepage/config';
import { HomepageComponent } from '../homepage/homepage.component';
// import { Config } from '../homepage/config';


@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.component.html',
  styleUrls: ['./modal-config.component.css']
})


export class ModalConfigComponent implements OnInit {
  closeResult = '';
  player1!: string;
  player2!: string;
  colors: boolean = false;
  clicks: number = 0;
  isComputer: boolean = false;
  playerOrPc: string = 'Player 2: ';
  @ViewChild('content') template!: ElementRef;


  constructor(private modalService: NgbModal,
              public config : Config,
              private homepage: HomepageComponent) { }

  ngOnInit(): void {
    this.player1 = this.config.getPlayer1Color();
    this.player2 = this.config.getPlayer2Color();
  }

  ngAfterViewInit(): void{
 

    setTimeout(() => {
      this.open(this.template);
    })
  
  }
  
  open(content: any) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };

    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  setColor(color: any, color2: any){
    console.log(color);
    this.config.setPlayer1Color(color);
    this.config.setPlayer2Color(color2);
    this.homepage.ngOnInit();
  }

  setPlayerModeAndSwitch(){
    this.colors = true;
    this.clicks++;
  }


  setMultiplayer(){
    this.config.setIsRobot(false);
    this.homepage.ngOnInit();
    this.playerOrPc = 'Player 2: ';
  }

  setComputer(){
    this.config.setIsRobot(true);
    this.homepage.ngOnInit();
    this.playerOrPc = 'Computer: ';
  }

  



}
