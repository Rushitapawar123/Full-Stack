const H=document .createElement("h2");
const p=document.createElement("p");
const  b=document.createElement("Button");
H.classList.add("text-info");
H.textContent="sub heading"
// p.classList.add("")
p.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, cupiditate animi non consequuntur laudantium quas consectetur asperiores beatae nostrum, soluta eius dicta provident fugit. Quos nesciunt deleniti eius modi excepturi."

b.classList.add("btn","btn-primary");
b.innerText="submit";
const div=document.getElementById("task1");
div.appendChild(H);

div.appendChild(H);
div.appendChild(p);
div.appendChild(b);
H.appendChild("append");

console.log(H.innerText);

