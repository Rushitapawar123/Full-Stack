const  Form1=document.getElementById("form1");
Form1.addEventListener("submit",(e)=>{
  e.preventDefault();

  const formdata= new FormData(Form1);

  const nm =formdata.get("fullname");

  let isvalid=true;

  for(var i = 0; i < nm.length; i++)
  {
    if((nm.charAt(i)>="A" && nm.charAt(i)<="Z")||
    (nm.charAt(i)>="a" && nm.charAt(i)<="z")||
    nm.charAt(i)===" "){
      isvalid=true;
    }
    else{
      isvalid=false;
      break;
    }
  }
  console.log(isvalid ? "Valid" : "Invalid");
})