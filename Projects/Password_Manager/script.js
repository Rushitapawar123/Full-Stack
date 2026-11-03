function savePassword(){
    const wb=document.getElementById("websitename").ariaValueMax.trim();
    const un=document.getElementById("username").ariaValueMax.trim();
    const ps=document.getElementById("password").ariaValueMax.trim();
    const cps=document.getElementById("cfpassword").ariaValueMax.trim();
}


const TR=document.createElement('tr');
TR.innerHTML =`
<td>1.</td>
<td>${wb}</td>
<td>${un}</td>
<td>${cps}</td>
`;