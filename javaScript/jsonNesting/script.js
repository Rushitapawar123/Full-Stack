
const student=[
    {
        Name:"rahul",
        Age:18,
        Gender:"male",
        marks:null,
        Subjects:"hindi",
        Teacher:[{hindi:"abc",maths:"cde",physics:"efg"}]
       
    },
     {
        Name:"Rushita",
        Age:20,
        Gender:"male",
        marks:89,
        Subjects:"hindi",
        Teacher:[{hindi:"abc",maths:"cde",physics:"efg"}],
        FGames:"football",
       
    },
     {
        Name:"harshita",
        Age:19,
        Gender:"Female",
        marks:70,
        Subjects:"Maths",
        Teacher:[{hindi:"abc",maths:"cde",physics:"efg"},
            {chemistry:"ssss", English:"jjj",Biology:"bbbbb" }
        ]
   
    },

     {
        Name:"kushal",
        Age:19,
        Gender:"Female",
        marks:80,
        Subjects:"Maths",
        Teacher:[{hindi:"abc",maths:"cde",physics:"efg"},
            {chemistry:"ssss", English:"jjj",Biology:"bbbbb" }
        ]
   
    },
    
]

console.log(student);
// student[1].marks=64;
student[0].Teacher[0]="rerf";

student[1].Name="rushi";
// delete student[0].marks;

const somedata={
    name:"rushita pawar",
    age:21,
    height:6.6,

    // const jsonTostring=json.stringfy

    // console.log(jsonTostring);
   


}

 var  stname="rushi";
    var marks=99;

    console.log("student with name",stname,"scored",marks);
    console.log(`student with name ${stname} scores ${marks}`);