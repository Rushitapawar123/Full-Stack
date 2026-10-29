const str="JavaScript'";

console.log(str.slicet(3));
console.log(str.substring(3));


const text = "Learn JavaScript";

console.log(text.indexOf("Java"));
console.log(text.indexOf("Script"));
console.log(text.indexOf("Python"));


const str2=str.slice(4)

console.log(str2);

const s_str=str.substring(2,5);

console.log(s_str);

const filename=" assignment .pdf ";
console.log(filename.trim())
console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith("jpg"));




const arr=[10,24,32,53,46,76,89]
console.log(arr.at[2]);
console.log(arr.charAt[2]);

const a=Math.random()*10;
console.log(a);


console.log();

console.log(Math.sqrt(124));
console.log(Math.sqrt(-16));
// console.log(Math.sqrt(2));
console.log(Math.cbrt(-27));
console.log(Math.cbrt(125));
console.log(Math.cbrt(-8));

console.log(Math.pow(2,4));
console.log(Math.sign(25));
console.log(Math.sign(-25));
console.log(Math.sign(0));
console.log(Math.sign(NaN));

console.log(Math.hypot(3, 4));
console.log(Math.hypot(5, 12));

const min = 5;
const max = 15;

const number =
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(number);


// . Generate an integer with an exclusive maximum
// Sometimes the minimum should be included, but the maximum should be excluded.

const min1 = 5;
const max1 = 15;

const number1 =
  Math.floor(Math.random() * (max - min)) + min;

console.log(number);

const min2 = 10;
const max2 = 20;

const number2 = Math.random() * (max - min) + min;

console.log(number);
const today = new Date(0);

console.log(today);

const first = new Date("2005-8-12");
const second = Date();

console.log(first);  // A Date object
console.log(second); // A string
const date = new Date(2026, 9, 22, 14, 30, 45);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const date1 = new Date(2026, 9, 22);

console.log(
  date1.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
);