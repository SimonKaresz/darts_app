import { createContext, useContext} from "react";

export type InputContent = {
    throwValue:number;
    setThrowValue:(c:number)=>void;
    changePlayer:boolean;
    setChangePlayer:(a:boolean)=>void;

    //Player One
    initialValuePlayerOne:number;
    setInitialValuePlayerOne:(i:number)=>void;
    dartCountPlayerOne:number;
    setDartCountPlayerOne:(d:number)=>void;
    highscorePlayerOne:number;
    setHighscorePlayerOne:(h:number)=>void;
    throwBoolPlayerOne:boolean;
    setThrowBoolPlayerOne:(t:boolean)=>void;
    legsPlayerOne:number;
    setLegsPlayerOne:(s:number)=>void;
    checkoutPlayerOne:string[];
    setCheckoutPlayerOne:(c:string[])=>void;
    allPointPlayerOne:number;
    setAllPointPlayerOne:(a:number)=>void;
    allArrowPlayerOne:number;
    setAllArrowPlayerOne:(a:number)=>void;

    //PlayerTwo
    initialValuePlayerTwo:number;
    setInitialValuePlayerTwo:(i:number)=>void;
    dartCountPlayerTwo:number;
    setDartCountPlayerTwo:(d:number)=>void;
    highscorePlayerTwo:number;
    setHighscorePlayerTwo:(h:number)=>void;
    throwBoolPlayerTwo:boolean;
    setThrowBoolPlayerTwo:(t:boolean)=>void;
    legsPlayerTwo:number;
    setLegsPlayerTwo:(s:number)=>void;
    checkoutPlayerTwo:string[];
    setCheckoutPlayerTwo:(c:string[])=>void;
    allPointPlayerTwo:number;
    setAllPointPlayerTwo:(a:number)=>void;
    allArrowPlayerTwo:number;
    setAllArrowPlayerTwo:(a:number)=>void;
}

export const InputContextTwoPlayer = createContext<InputContent>({
    throwValue:0,
    setThrowValue:()=>{},
    changePlayer:false,
    setChangePlayer:()=>{},

    //Player One
    initialValuePlayerOne:501,
    setInitialValuePlayerOne:()=>{},
    dartCountPlayerOne:0,
    setDartCountPlayerOne:()=>{},
    highscorePlayerOne:0,
    setHighscorePlayerOne:()=>{},
    throwBoolPlayerOne:false,
    setThrowBoolPlayerOne:()=>{},
    legsPlayerOne:0,
    setLegsPlayerOne:()=>{},
    checkoutPlayerOne:[],
    setCheckoutPlayerOne:()=>{},
    allPointPlayerOne:0,
    setAllPointPlayerOne:()=>{},
    allArrowPlayerOne:0,
    setAllArrowPlayerOne:()=>{},
    

    //PlayerTwo
    initialValuePlayerTwo:501,
    setInitialValuePlayerTwo:()=>{},
    dartCountPlayerTwo:0,
    setDartCountPlayerTwo:()=>{},
    highscorePlayerTwo:0,
    setHighscorePlayerTwo:()=>{},
    throwBoolPlayerTwo:false,
    setThrowBoolPlayerTwo:()=>{},
    legsPlayerTwo:0,
    setLegsPlayerTwo:()=>{},
    checkoutPlayerTwo:[],
    setCheckoutPlayerTwo:()=>{},
    allPointPlayerTwo:0,
    setAllPointPlayerTwo:()=>{},
    allArrowPlayerTwo:0,
    setAllArrowPlayerTwo:()=>{},
});

export const useInputContextPlayerTwo=()=>useContext(InputContextTwoPlayer);

