import { OnInit, Injectable} from "@angular/core";
import { Conditions } from "./conditions";
import Swal from 'sweetalert2'


@Injectable()
export class Board implements OnInit{
    players: Array<number> = [-1,1];
    board: Array<Array<number>> = [
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ]
      ];
    active: boolean = true;
    inserts: number = 0;
    nextPlayer: number = -1;
    isRobotTurn!: boolean;
    constructor(private conditions: Conditions){
    }


    ngOnInit(): void {
        
    }

    playAndNext(yAxi: number, player: number, isRobot: boolean): void{
        


        let col: number[] = this.board[yAxi];
        let colIndex = -1;

        if(!this.active){
            return
        }
      
         let thereIsSpace = 0;
         //Nuk lejon nderrimin e lojtarit nese nuk ka vend me ne ate stack
         for(let piece = 0; piece < col.length; piece++){
            // console.log(col);
             console.log(col[piece]);
            
            if (col[piece] === 0){
                console.log(col[piece]);
                thereIsSpace++;
                
            }
            console.log(thereIsSpace);
            if(thereIsSpace > 0){
                continue;
            }
            else{
                return;
            }
        }
        
        if(isRobot){
            this.isRobotTurn = true;
        }
        else{
            this.isRobotTurn = false;
        }
        

        col.forEach((piece, i) => {
            if (piece === 0){
                colIndex = i;
            }
        });

        col[colIndex] = player;
        
        this.inserts++;

        this.nextPlayer = this.players[this.inserts % 2];
        console.log("Liiiiiiirim");
        console.log(this.board);
        if(this.winner()){

                setTimeout(()=>{  Swal.fire({
                    position: 'center',
                    title: player == -1 ? 'Player1 has won' : 'Player2 has won',
                    showConfirmButton: true,
                    confirmButtonText: 'Restart Game',
                    allowOutsideClick: false,
                    preConfirm: () => {new Board(this.conditions);
                        for(let i = 0; i < this.board.length; i++){
                            for(let j = 0; j < this.board[0].length; j++){
                                this.board[i][j] = 0;
                            }
                        }
                        console.log(this.board);
                        this.active = true;
                        this.isRobotTurn = false;
                        
                    
                    }
                  });}, 1500);
               
            
            // console.log("Fitoj")
            

              this.active = false;
        }
        else{
            let count = 0;
            for(let i of this.board){
                for (let j of i){
                    if (j != 0){
                        count++
                    }
                    if(count == 42){
                        
                        setTimeout(()=>{    Swal.fire({
                            position: 'center',
                            title: 'Its a draw',
                            showConfirmButton: true,
                            confirmButtonText: 'Restart Game',
                            allowOutsideClick: false,
                            preConfirm: () => {new Board(this.conditions);
                                for(let i = 0; i < this.board.length; i++){
                                    for(let j = 0; j < this.board[0].length; j++){
                                        this.board[i][j] = 0;
                                    }
                                }
                                console.log(this.board);
                                this.active = true;
                                this.isRobotTurn = false;
                                
                            
                            }
                          });}, 1500);
            
                          this.active = false;
                    }

                }
            }
            // console.log("Nuk fitoj")
            this.active = true;
        }
        
    }



    /* This functions will be used to get width and height of board dynamically */
    getHeightBoard(): number {
        return this.board.length;
    }
    
    getWidthBoard(): number {
        return this.board[0].length;
    }

    winner(): boolean{
        return this.conditions.checkRows(this.board) || this.conditions.checkColumns(this.board) 
               || this.conditions.checkTopLeftDiagonal(this.board) || this.conditions.checkTopRightDiagonal(this.board);
    }


}