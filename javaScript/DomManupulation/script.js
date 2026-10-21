const headingtext=document.getElementById("heading");
const paratext=document.getElementById("studentMassage");
const btnlabel= document.getElementById("coursebtn");

console.log(headingtext.innerHTML);
console.log(paratext.innerText);
console.log(btnlabel.textContent)

headingtext.innerText="rushitaPawar";
headingtext.innerHTML="rushita Pawar"
headingtext.textContent="rushita"

function updatemyName(){
    const Myname=document.getElementById("myName").value.trim();
    paratext.innerText="welcome to your learnning portel !";
}



// const body=document.querySelector("body");
// console.log(body);

// console.log(body.childNodes)
// console.log("innrtext");
// console.log(body.innerText);

// console.log("innrhtml");
// console.log(body.innerHTML);

// console.log("textconstent");
// console.log(body.textContent);


const pic=document.getElementById("somepic");
pic.src="c:\Users\rushi\Downloads\staff-4.webp";
pic.alt="ganish ji.jpeg";


function change(){
    const MynameInput=document.getElementById("MyName");

    MynameInput.id="myfullname";
    MynameInput.type="password";
    MynameInput.name="fullName";

    pic.setAttribute("src",);
    pic.setAttribute("alt",)

}

headingtext.style.color="red";
headingtext.style.backgroundColorcolor="blue";
