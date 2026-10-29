const ob={
    fname:"rushita",
    gender:"male",
    year:"3",
    college:"mit",
    cgpa:"8"
}

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));



// Object Destructuring
const{fname,year,cgpa}=ob;
console.log(ob.gender);
console.log(year);



// its like a for loop Spread Operator
const ar=[10,20,30,40,50,60];

console.log(...ar);

const ar2=[45,56,45,32,2,...ar];
console.log(ar2);

function displaystudent(funame,...subject){
    console.log("student",funame);
console.log("subject",subject);
}

displaystudent("Arav","html","css","javascript","bootstrap");

function sum(...n){
    return n.reduce((result=0,num)=>(result+=num));

}

const answer=sum(2,3,4,5,6,7,8,9);
console.log(answer);







