// const myString = "my home world is planet earth in sol system";
const myString = "developer";
let myNewString='';

myNewString += myString.charAt(0).toUpperCase()
myNewString += myString.slice(1)

// solution 2
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`

// for (let i = 0; i < temp.length; i++) {
//     myNewString = myNewString + temp[i].charAt(0).toUpperCase();
//     myNewString = myNewString + temp[i].slice(1);
//     myNewString += " "
// }
console.log(myNewString);

// console.log(x,typeof x);
// console.log(temp);
// console.log(temp[0][0]);
// console.log("my"[1]);

