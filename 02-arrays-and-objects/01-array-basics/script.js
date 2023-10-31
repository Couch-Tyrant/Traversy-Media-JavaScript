let x;

//Array Literal
const numbers = [10, 20, 30, 40, 50];
const mixed = [10, null, 'hi', numbers];

//Array Constructor
const fruits = new Array('apple', 'grape', 'pineapple', 'carrot');

x = numbers[0];
x = numbers[1] + numbers[2];

x = `My favorit frruit is an ${fruits[2]}`;
x = mixed;

x = numbers.length;

fruits[0] = 'mango';
x = fruits;

// numbers.length = 1;
x = numbers;

//to add to the last of an array
fruits[fruits.length] = 'pear';
x = fruits;

console.log(x);
