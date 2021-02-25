
import { Component, Injectable, OnInit, ViewChild} from "@angular/core";

@Injectable()
export class Conditions implements OnInit{
    players: Array<number> = [-1,1];
    constructor(){
        
    }

    ngOnInit(): void{
      
    } 


    checkRows(cBoard: Array<Array<number>>, player: number): boolean {
        for (var j = 0; j<cBoard[0].length-3; j++ ){
            for (var i = 0; i<cBoard.length; i++){
                if (cBoard[i][j] == player && cBoard[i][j+1] == player && cBoard[i][j+2] == player && cBoard[i][j+3] == player){
                    return true;
                }           
            }
        }
        
        return false;           
      
        
    }

    

    checkColumns(cBoard: Array<Array<number>>, player: number): boolean{
        for (var i = 0; i<cBoard.length-3; i++ ){
            for (var j = 0; j<cBoard[0].length; j++){
                if (cBoard[i][j] == player && cBoard[i][j+1] == player && cBoard[i][j+2] == player && cBoard[i][j+3] == player){
                    return true;
                }           
            }
        }
        
        return false;    
    }

    checkDiagonal(): boolean{
        return false;
    } 

    
}