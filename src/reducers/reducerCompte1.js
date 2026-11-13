
import { decrementer, incrementer, pas, raz } from "../Actions/typeActions1"


const initialState = {compteur : 0 , pas :1}
export default function ReducerCompte(state=initialState,action) {
switch(action.type){
    case incrementer :
        return {
            ...state , compteur : state.compteur + state.pas
        };
        case decrementer : 
        return {
            ...state , compteur : state.compteur - state.pas
        }
        case raz :
            return {
                ...state , compteur : 0 , pas : 1
            }
            case pas :
                return {
                    ...state,pas : Number(action.playload)
                }
                default :return state;
}
}
