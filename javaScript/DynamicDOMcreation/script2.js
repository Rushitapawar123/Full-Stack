const ar=["somya","rupesh","ranu","rushi","tabu","sumit","milki"];

const List=document.createElement("ol");
ar.forEach((item)=>{
    const l=document.createElement("li");
    l.textContent=item;

    List.appendChild(l);


});

document.getElementById("myList").appendChild(List);