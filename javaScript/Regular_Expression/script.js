const  Form1= document.getElementById("form1");
Form1.addEventListener("submit",(e)=>{
  e.preventDefault();

  const formdata= new FormData(Form1);

  const nm =formdata.get("fname");

  // let isvalid=true;

  // for(var i = 0; i < nm.length; i++)
  // {
  //   if((nm.charAt(i)>="A" && nm.charAt(i)<="Z")||
  //   (nm.charAt(i)>="a" && nm.charAt(i)<="z")||
  //   nm.charAt(i)===" "){
  //     isvalid=true;
  //   }
  //   else{
  //     isvalid=false;
  //     break;
  //   }hhh/
  // }

 if (/^[A-Za-z ]+$/.test(nm)) {
      console.log("Valid Name");
    } else {
      console.log("Invalid Name");
    }


//  console.log(/^[A-Za-z ]+$/.test(nm) ? "Valid" : "Invalid");

  // console.log(isvalid ? "Valid" : "Invalid");
})