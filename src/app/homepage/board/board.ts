import { OnInit, Injectable } from "@angular/core";

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
    constructor(){
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
        
    }


}