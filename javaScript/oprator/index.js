
let a=10;
let b=20;
let c="10";
let d="20";

console.log(a==b); //false
console.log(a==c); //true
console.log(a===c);//false
console.log(a!=b);//true
console.log(a!==c); //true

let x=5;
let y=2;

console.log(x%y); //1

let p=10;
let q=3;

console.log(p/q) ;

// AND
// OR
// NOT

let m=true;
let n=false;
let o=true;

console.log(m&&n);
console.log(m&&o);
console.log(n&&o);
console.log(m||n);
console.log(m||o);
console.log(n&&o);


console.log(m&&o);
console.log(m&&n);

console.log(b--);
console.log(b);
console.log(--b);


console.log(a>b ? "hello":"bye");

if(a>b)
{
    console.log("hello");
}
else
{
    console.log("bye");
}

for(var i=0;i<=5;i++)
{
    console.log("we are learnnig javascript",i+1);
}

var i=0;
while(i<=5){
    console.log(i);
    i++;
}

var i=0;

do{
    console.log(i);
    i++;
}
while(i<=5);