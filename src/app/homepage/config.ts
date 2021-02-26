import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class Config {


    private player1Color: string = 'red';
    private player2Color: string = 'blue';
    private boardColumns!: number;
    private rowColumns!: number;
    private isRobot!: boolean;

    constructor(){

    }

    setPlayer1Color(data: string): void{
        this.player1Color = data;
    }

    getPlayer1Color(): string{
        return this.player1Color;
    }

    setPlayer2Color(data: string): void{
        this.player2Color = data;
    }

    getPlayer2Color(): string{
        return this.player2Color;
    }

    setIsRobot(data: boolean): void{
        this.isRobot = data;
    }
    getIsRobot(): boolean{
        return this.isRobot;
    }
}
