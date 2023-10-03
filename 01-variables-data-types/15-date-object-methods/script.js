let x;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;

x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' }); //use this, its newer

console.log(x);
