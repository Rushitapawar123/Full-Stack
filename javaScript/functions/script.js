function sum(a,b)
{
    let c=a+b;
    console.log(c);
}

sum(2,4);

function sum_with_d(x,y=10)
{
    console.log(x+y);
}
sum_with_d(7);
sum_with_d(8,20);


function calculate(a,b,c)
{
return a+b-c;
}

let ans=calculate(5,4,6);
console.log(ans);


// function expression
const greet= function()
{
    console.log("wellcome to java script");
}
greet();