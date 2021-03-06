
import { Component, Injectable, OnInit, ViewChild} from "@angular/core";

@Injectable()
export class Conditions implements OnInit{
    players: Array<number> = [-1,1];
    constructor(){
        
    }

    ngOnInit(): void{
      
    } 


    checkRows(cBoard: Array<Array<number>>): boolean {
        let found = 0;
        let foundPiece = 0;
      
        for (let x = 0; x < cBoard[0].length; x++) {
          for (let y = 0; y < cBoard.length; y++) {
      
            // Current piece in this row
            let piece = cBoard[y][x];
      
            // Reset things if piece is 0
            if (piece === 0) {   
              found = 0;    
              foundPiece = 0;  
              continue;
            }
      
            if (piece !== foundPiece) { 
              found = 1;
              foundPiece = piece;       // foundPiece = founded number
              continue;
            }
      
            // Increase number of found pieces
            found++;
      
            // More than 4 found pieces in a piece?
            if (found >= 4) {
              return true;
            }
          }
        }
      
        // nothing was found in the same row
        return false;               
    }

    

    checkColumns(cBoard: Array<Array<number>>): boolean{
        let found = 0;
        let foundPiece = 0;
      
        for (let column of cBoard) {
          for (let piece of column) {
      
            // Reset things if piece is 0
            if (piece === 0) {
              found = 0;
              foundPiece = 0;
              continue;
            }
            
            if (piece !== foundPiece) {
              found = 1;
              foundPiece = piece;
              continue;
            }
      
            // Increase number of found pieces
            found++;
      
            // More than 4 found pieces in a column?
            if (found >= 4) {
              return true;
            }
          }
        }      
        // nothing was found in the same row
        return false; 
    }

    checkTopLeftDiagonal(cBoard: Array<Array<number>>): boolean{
        
        let found;
        let foundPiece;
        let col;
        let matchReq = 4; // can be made dynamic later on
        let numRows = cBoard[0].length;
        let numCols = cBoard.length;
        

        for (
            let baseCol = matchReq - numRows;
            baseCol < numCols - (matchReq - 1);
            baseCol++
        ) {

            found = 0;
            foundPiece = 0;
            col = baseCol - 1; 
          
            for (let row = 0; row < numRows; row++) {
            col++;

        
            if (col >= 0 && col < numCols && row < numRows) {

                let piece = cBoard[col][row];

                if(!piece) {
                    found = 0;
                }

                if (!!piece && (piece === foundPiece || !foundPiece) && (++found) === matchReq) {
                    return true;
                }

                foundPiece = piece;

            }
            }
        }

        return false;
    } 
    

    checkTopRightDiagonal(cBoard: Array<Array<Number>>): boolean{

        
        let found;
        let foundPiece;
        let col;
        let matchReq = 4;
        let numCols = cBoard.length;
        let numRows = cBoard[0].length;

        for (
            let baseCol = matchReq - numRows;
            baseCol < numCols - (matchReq - 1);
            baseCol++
        ) {

            found = 0;
            foundPiece = 0;
            col = baseCol - 1; 

    
            for (let row = numRows - 1; row >= 0; row--) {
                col++;

      
                if (col >= 0 && col < numCols && row < numRows) {

                let piece = cBoard[col][row];

                if(!piece) {
                    found = 0;
                }

                if (!!piece && (piece === foundPiece || !foundPiece) && (++found) === matchReq) {
                    return true;
                }

                foundPiece = piece;

            }
            }
        }


        return false;

    }

    
}