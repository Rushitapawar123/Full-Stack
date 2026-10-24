const showAssBtn=document.getElementById("showAssignmentNotification");
const showAttBtn=document.getElementById("showattendencenotification");
const stopASSBtn=document.getElementById("stopAssignmentNotification");


const asspara=document.getElementById("AssignmentNotification");
const attpara=document.getElementById("attendencenotification");


function ShowAssingment(){

    asspara.textContent="your assignment deadline is approching";
}

showAssBtn.addEventListener("click",ShowAssingment);

showAssBtn.removeEventListener("click",()=>{
    attpara.textContent="please chek your attendence status!"
});

stopASSBtn.addEventListener("click",()=>{
    asspara.textContent="your assignment deadline is approching"
});

showAssBtn.removeEventListener("click",()=>{
    attpara.textContent="please chek your attendence status!"
// });

// showAssBtn.addEventListener("click",()=>{
    asspara.textContent="your assignment notification is stop"
});

const parent=document.getElementById("outer");
const child =document.getElementById("inner");

parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

child.addEventListener("click",()=>{
    console.log("child clicked");
})