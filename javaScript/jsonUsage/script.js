

const data=[{
    title:"myphone",
    description:"very good phone is betroot color",
    "button1":"₹2500",
    "button2":"buynow",
},

{
    title:"vivo",
    description:"very good phone is betroot color",
    "button1":"2500",
    "button":"buynow",
},

{
    title:"ramsungs fold 7",
    description:"Feel the book style phone",
    "button1":"2500",
    "button":"buynow",
},

{
    title:"somthing",
    description:"very good phone is betroot color",
    "button1":"2500",
    "button":"buynow",
},
{
    title:"biyou 17",
    description:"very good phone is betroot color",
    "button1":"2500",
    "button":"buynow",
},
{
    title:"kyakiya lumia 825",
    description:"very good phone is betroot color",
    "button1":"2500",
    "button":"buynow",
}
];

function add_data(item){
    const mycard=document.createElement("div");


    mycard.classList.add("col-3","p-3");

    mycard.innerHTML=
    ` <div class="p-2 border shadow rounded">
              <h3>${["title"]}</h3>
              <p>
             ${item.description}
              </p>
              <div class="row px-3">
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-outline-primary w-full">Test 1</button>
                </div>
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-primary w-full">Test 2</button>
                </div>
              </div>
            </div>`;

let cp=document.getElementById("card-parent");
console.log(cp);
cp.appendChild(mycard);

}

data.forEach((element)=>
    add_data(element)
);

const student={
     name:"Aarav",
     age:20,

};

console.log(student);
student.name="Manav";
console.log(student);
student.subject="CSE";
console.log(student);

delete student.name;
console.log(student);