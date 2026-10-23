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


document.getElementById("press").addEventListener("",()=>{
    document.getElementById("press").innerText="Pointer is over the paragraph!";
  

})

document.getElementById("box2").addEventListener("mouseout",()=>{
    document.getElementById("box2").innerText="Box clicked!";
  

});


document.getElementById("namesubmit").addEventListener("click",()=>{
 console.log(document.getElementById("namesubmit").ariaValueMax.trim());

});

document.getElementById("fullname").addEventListener("keydown",(e)=>{
    // e.key==="Enter"?()=>{

    // }

    if(e.key==="Enter"){
        ()=>{
            console.log(document.getElementById("fullname").ariaValueMax.trim());
        }
    }
});