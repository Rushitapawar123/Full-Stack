function showAlert(){
  alert("click me  button clicked ushing html event")
}


document.getElementById("clickbutton").addEventListener("click",showAlert);

function showAlert2(){
  alert("click me  button clicked ushing js event")
}

document.getElementById("box").addEventListener("click",()=>{

    document.getElementById("box").innerText="text was cliked";
});

document.getElementById("keyPressMessage").addEventListener("click",()=>{
    document.getElementById("keyPressMessage").innerText="Welcome to RiCR";
  

});


document.getElementById("press").addEventListener("mousedown",()=>{
    document.getElementById("press").innerText="Pointer is over the paragraph!";
  

});

document.getElementById("box2").addEventListener("mouseout",()=>{
    document.getElementById("box2").innerText="Box out of the box";
  

});

document.getElementById("box2").addEventListener("mouseenter",()=>{
    document.getElementById("box2").innerText="Box clicked!";
  

});


document.getElementById("namesubmit").addEventListener("click",()=>{
 console.log(document.getElementById("namesubmit").Value.trim());

});

document.getElementById("namesubmit").addEventListener("submit",(e)=>{
    e.key==="Enter" &&
    console.log(document.getElementById("namesubmit").Value.trim());


    }

    // if(e.key==="Enter"){
    //     ()=>{
    //         console.log(document.getElementById("fullname").ariaValueMax.trim());
    //     }
    // }
);

document.getElementById("loginform").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("login Done");
});

document.getElementById("fullname").addEventListener("keydown",(e)=>{
    e.key==="Enter"&&
    console.log(document.getElementById("fullname").Value.trim());
});