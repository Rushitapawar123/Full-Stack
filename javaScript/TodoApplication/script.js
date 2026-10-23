function addTask(){
     const newTask=document.getElementById("taskInput").value.trim();
    
     const Li =document.createElement("li");
      Li.classList.add("p-3");


// const chek =document.createElement("chekbox");
// chek.textContent=chekbox;

      const SPAN =document.createElement("span");
      SPAN.textContent=newTask;

      const BUTTON =document.createElement("button");

      BUTTON.classList.add("btn","btn-danger","btn-sm","ms-3");
      BUTTON.textContent="Delete";

      BUTTON.onclick=()=>Li.remove();


      Li.appendChild(SPAN);
      Li.appendChild(BUTTON);
      // Li.appendChild(chek);

      document.getElementById("taskList").appendChild(Li);

      document.getElementById("taskInput").value="";
}