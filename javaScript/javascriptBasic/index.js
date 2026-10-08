



// let a=10;
// let studentname="rushi";
// let marks=88.4;

// console.log(a);
// console.log(studentname);

// console.log(typeof(a));
// console.log(typeof(studentname));

// for(let i=2;i<=20;i=i+2)
// {
//     console.log(i)
// }

// for(let i=20;i>=2;i=i-2)
// {
//     console.log(i)
// }

// for(let i=7;i<50;i=i+7)
// {
//     console.log(i);
// }

// let n=prompt("write your number");

// n=parseInt(n);

// for(let i=n;  i<=n*10; i=i+n)
// {
//     console.log(i);
// }

// let i=2;
// while(i<=33)
// {
//     console.log(i);
//    i= i+2;
// }

const favmovie="shita";

let guess=prompt("guess my favrate movie");

while((guess!=favmovie) && (guess !="quit"))
{
console.log("wrong guess");
guess=prompt("plese try again");
}

if(guess==favmovie)
{
    console.log("congratulation")
}
else{
    console.log("you Quite")
}

