import { decrementer, incrementer, pas, raz } from "./typeActions1"

export  function Changepas (a) {
    return {type:pas , playload :a }
}

export function Incrementer(){
    return {type :incrementer}
}

export function Decrementer (){
    return {type :decrementer }
}

export function Raz () {
    return { type : raz }
}