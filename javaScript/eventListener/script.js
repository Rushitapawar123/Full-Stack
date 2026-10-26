const showAssBtn=document.getElementById("showAssignmentNotification");
const showAttBtn=document.getElementById("showattendencenotification");
const stopASSBtn=document.getElementById("stopAssignmentNotification");


const asspara=document.getElementById("AssignmentNotification");
const attpara=document.getElementById("attendencenotification");


function ShowAssingment(){

    asspara.textContent="your assignment deadline is approching";
}

showAssBtn.addEventListener("click",ShowAssingment);

showAssBtn.addEventListener("click",()=>{
    attpara.textContent="please  your attenden status!"
});

stopASSBtn.addEventListener("click",()=>{
    showAssBtn.removeEventListener("click",ShowAssingment);
    asspara.textContent="your assig deadline is approching"
});

// showAssBtn.removeEventListener("click",()=>{
//    showAssBtn.removeEventListener("click", ShowAssingment);

// });

// showAssBtn.addEventListener("click",()=>{
//     asspara.textContent="your assignment notification is stop"
// });

const parent=document.getElementById("outer");
const child =document.getElementById("inner");

parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

child.addEventListener("click",()=>{
    console.log("child clicked");
});

const stip=document.getElementById("EventsCapturing");

function view(){
    console.log("view Button Clicked");
}

stip.addEventListener("click",view);

document.getElementById("view").addEventListener("click",view);

const parentCard= document.getElementById("EventDelegation");

parentCard.addEventListener("click",(e)=>{
    if(e.target.tagName==="Div")
    {
        console.log(e.target.textContent);
    }
});
 
