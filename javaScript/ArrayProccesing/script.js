const ary = ["Apple", 2.5, 99, "himachl", "a"];

// let arr=["Apple",2.5,99,"himachl","a"];

console.log("with forech");
ary.forEach((Element) => {
  // console.log(Element);
  if (typeof Element === "number") {
    console.log(Element);
  }
});

console.log("with map");
var x = ary.map((elemnt) => {
  if (typeof elemnt === "number") {
    // console.log(elemnt);
    return elemnt;
  }
  // console.log(elemnt);
});
console.log("x=", x);

const ar2 = ["Apple", 2.5, 99, "himachl", "a"];

var F = ar2.filter((item) => item !== 99);
console.log("F=", F);

var FI = ar2.find((item) => item === "Apple");
// console.log("F=", F);
console.log("FI=",FI)

var FIX = ar2.findIndex((item) => item === 99);
console.log("FIX=", FIX);

const ar3=[2,5,1,7,3,9,4,8];
var s=ar3.sort((a,b)=>(b-a));
console.log("sort,",ar3);