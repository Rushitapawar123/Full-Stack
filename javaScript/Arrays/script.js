const ar1=[1,2,3,4,5];

let ar2=[1,2,3,4];


console.log(ar1);
console.log(ar2);

ar1[3]=30;

ar2=10;

console.log(ar1);
console.log(ar2);

const ch1=["Apple","def","hijk"];

console.log(ch1);

const  ch2=["Apple","2kg","himachl",56.6,43 ,true]

for(var j=0;j<=ch2.length;j++)
{
    console.log(ch2[j]);
}
// console.log(ch2);


     
    const arr2=[1,2,3,4,5,6,7,8,9];

    for(var i=0;i<=arr2.length;i++)
    {
        console.log(arr2[i]);
    }
 
console.log(arr2[2]);
console.log(arr2.at(-3));

arr2.push("value");
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.pop();
console.log(arr2);


 let abc=arr2.filter((item)=>item !=2)
 console.log(abc);

 const Name="lucky kumar sing rajput";

//  console.log(x);

 let x=Name.split(" ");
 console.log(x);

 let y=Name.split("u");
 console.log(y);


 const  ch3=["Apple","2kg","himachl",56.6,43 ,true]
 ch3.shift();

 console.log();ch3

 ch3.unshift("mango");
 console.log(ch3);

 const  ch4=["Apple","2kg","nagpur",56.6,43 ,false]

 ch4.forEach((element)=>
 {
    console.log(element);
 }
 );
 
 
