
const jsondata={

    title:"myphonr",
    description:"very good phone",
    price:5600
    
};

const dataReadytostore= json.stringfy(json);


localStorage.setItem("MYnamedata",dataReadytostore);


const getLSdata=localStorage.getItem("mynamedata");

// document
// .querySelector("body")
// .appendChild((document.createElement("div").innerText=getLSdata));


const DIV=document.createElement("div");


function passwordvisibility(){
    const in =document.getElementById("mypassword");
    const  bn= document.getElementById("paawordcontrole");

    if(bn.innerText=="show");
    {
        in.type="text";
        bn.textContent="Hide";

    }
    else{
     in.type="password",
      bn.textContent="show";
    }
}