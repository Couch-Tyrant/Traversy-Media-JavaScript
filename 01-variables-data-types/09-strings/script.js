let x;

const name = "Sam";
const age = 26;

x = "Hello my name is " + name + " and I am " + age + " years old";

// Template Literals
x = `Hello my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = "Hello World";
x = s.length;

const t = new String("Hello World");
x = typeof t;
x = t.length;

x = t[0];

x = t.__proto__;
// console.log(t);

x = s.toUpperCase();
x = s.toLowerCase();
x = t.charAt(6);
x = s.indexOf("l");
x = s.substring(0, 2);
x = s.substring(7);
x = s.slice(-2);

x = "           Hello World";
x = x.trim();

x = s.replace("World", "Universe");

x = s.includes("Hello");

x = s.valueOf();

x = s.split("");

console.log(x);
