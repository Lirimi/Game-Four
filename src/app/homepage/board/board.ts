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
    constructor(private conditions: Conditions){
    }


    ngOnInit(): void {
        
    }

    playAndNext(yAxi: number, player: number): void{
        let col: number[] = this.board[yAxi];
        let colIndex = -1;

        col.forEach((piece, i) => {
            if (piece === 0){
                colIndex = i;
            }
        });

        col[colIndex] = player;

        this.inserts++;

        this.nextPlayer = this.players[this.inserts % 2];

        if(this.winner()){
            console.log("Fitoj")
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: player + 'has won',
                showConfirmButton: false,
                
              });

              this.active = false;
        }
        else{
            console.log("Nuk fitoj")
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