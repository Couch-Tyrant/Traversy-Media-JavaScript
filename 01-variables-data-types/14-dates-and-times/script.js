let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10);

d = new Date(2021, 0, 10, 1, 22, 19);

d = new Date('2021-01-10');

d = new Date('1/10/2021 12:30:11');

d = Date.now();

d = new Date('01-11-2021 12:30:00');
// d = d.getTime();
d = d.valueOf();

d = new Date(1000);

d = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 365)); //total number of years from 1970

console.log(d, typeof d);
