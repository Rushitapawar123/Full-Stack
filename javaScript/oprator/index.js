let a = 10;
let b = 20;
let c = "10";
let d = "20";

console.log(a == b); //false
console.log(a == c); //true
console.log(a === c); //false
console.log(a != b); //true
console.log(a !== c); //true

let x = 5;
let y = 2;

console.log(x % y); //1

let p = 10;
let q = 3;

console.log(p / q);

// AND
// OR
// NOT

let m = true;
let n = false;
let o = true;

console.log(m && n);
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(m || o);
console.log(n && o);

console.log(m && o);
console.log(m && n);

console.log(b--);
console.log(b);
console.log(--b);

console.log(a > b ? "hello" : "bye");

if (a > b) {
  console.log("hello");
} else {
  console.log("bye");
}

for (var i = 0; i <= 5; i++) {
  console.log("we are learnnig javascript", i + 1);
}

var i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

var i = 0;

do {
  console.log(i);
  i++;
} while (i <= 5);



console.log("1.chek the belance");

let choice = 1;

switch (choice) {
  case 1: {
    console.log("cheking your belance");
    break;
  }
  case 2: {
    console.log("please collect your case");
    break;
  }
  case 3: {
    console.log("please find your tarnsaction below");
    break;
  }

  case 4: {
    console.log("put your case into machine");
    break;
  }
  case 5: {
    console.log("thank you for");
    break;
  }
  default: {
    console.log("wrong choice");
  }
}

let choice1=3;
if(choice1===1)
{
    console.log("cheking your belance");
}
else if(choice1===2)
{
    console.log("please collect your case");
}
else if(choice1===3)
{
    console.log("please find your transaction below");
    
}

else if(choice1===4)
{
    console.log("please find your transaction below");
    
}

