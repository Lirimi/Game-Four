import { OnInit, Injectable } from "@angular/core";
import { Conditions } from "./conditions";

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

        this.inserts += 1;

        this.nextPlayer = this.players[this.inserts % 2];

        if(this.conditions.checkRows(this.board, player)){
            console.log("Fitoj")
        }
        else{
            console.log("Nuk fitoj")
        }
        
    }



    /* This functions will be used to get width and height of board dynamically */
    getHeightBoard(): number {
        return this.board.length;
    }
    
    getWidthBoard(): number {
        return this.board[0].length;
    }


}