import { createContext, useContext} from "react";

export type InputContent = {
    initialValue:number;
    setInitialValue:(i:number)=>void;
    throwValue:number;
    setThrowValue:(c:number)=>void;
    dartCount:number;
    setDartCount:(d:number)=>void;
    highscore:number;
    setHighscore:(h:number)=>void;
    throwBool:boolean;
    setThrowBool:(t:boolean)=>void;
    legs:number;
    setLegs:(s:number)=>void;
    checkout:string[];
    setCheckout:(c:string[])=>void;
    allPoint:number;
    setAllPoint:(a:number)=>void;
    allArrow:number;
    setAllArrow:(a:number)=>void;
}

export const InputContext = createContext<InputContent>({
    initialValue:501,
    setInitialValue:()=>{},
    throwValue:0,
    setThrowValue:()=>{},
    dartCount:0,
    setDartCount:()=>{},
    highscore:0,
    setHighscore:()=>{},
    throwBool:false,
    setThrowBool:()=>{},
    legs:0,
    setLegs:()=>{},
    checkout:[],
    setCheckout:()=>{},
    allPoint:0,
    setAllPoint:()=>{},
    allArrow:0,
    setAllArrow:()=>{},
});

export const useInputContext=()=>useContext(InputContext);

