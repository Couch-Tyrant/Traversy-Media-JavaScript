//Strings

const firstName = "Sarah";

//Numbers
const age = 31;
const deci = 5.23

//Booleam
const lovely = true;

//Null
const apartmentNo = null;

//Undefined
// let score;
const  score = undefined

//Symbol
const id = Symbol('id') 

//BigInt
const n = 9007199254740991n

//Reference Types
const num = [1,2,3,4,5]
const person={
    name:'Sarah',
    age:21
}
 function sayhello(){
    console.log("Helloooooo");
}



const copy = sayhello;
console.log(copy, typeof copy);

