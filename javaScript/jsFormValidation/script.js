function login(){

    const un= document.getElementById("username").Value.trim();
    const ps=document.getElementById("password").value;

console.log(un,ps)

const  loginformdata={
    name:un,
    password:ps,
}

}

const LoginForm=document.getElementById("LoginForm");

LoginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const loginformdata=new FormData(LoginForm);

    const UN= loginformdata.get("username");
    const PS=loginformdata.get("password");


    console.log(UN,PS);

});