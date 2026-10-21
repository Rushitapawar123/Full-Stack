function bion(){
    const b1=document.getElementById("bulb1");
    // b1.style.backgroundColor="yellow";
    b1.classList.add("b1");
}

function bioff(){
    const b1=document.getElementById("bulb1");
    b1.classList.remove("b1");
}
function  bi2on_off(){
    const b2=document.getElementById("bulb2");
    b2.classList.toggle("b2");
}
function b3chngecolor(){
    const b3=document.getElementById("bulb3");
    const color=document.getElementById("b3color").ariaValueMax;

    b3.style.backgroundColor=color;
}

function b3off(){
    const b3=document.getElementById("bulb3");
    b3.style.backgroundColor="white";
}