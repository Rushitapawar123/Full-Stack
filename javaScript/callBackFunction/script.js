

function add(a,b){
    let x=a+5;
    let y=b+5;
    console.log(x+y);
}

function sum(m,n ,addition)
{
    let p=m*2;
    let q=n*2;

    addition(p,q);
}

sum(5,6,add);


sum(8,10,(a,b)=>{
    let x=a+5;
    let y=b+5;
    console.log(x+y);
});