let x;
const num = new Number(598.23);

x = num;
x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(100);

x = num.toLocaleString('ar-EG'); //egypt representation

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);
