

// function savePassword() {
//   const wb = document.getElementById("websitename").value.trim();
//   const un = document.getElementById("username").value.trim();
//   const ps = document.getElementById("password").value.trim();
//   const cps = document.getElementById("cfpassword").value.trim();



// const TR = document.createElement("tr");
// TR.innerHTML = `
// <td>1.</td>
// <td>${wb}</td>
// <td>${un}</td>
// <td>${ps}</td>
// `;
// const td = document.createElement("td");
// const Btn = document.createElement("button");

// Btn.classList.add("btn", "btn-danger", "btn-sm", "d-flex", "gap-2");
// Btn.innerHTML = ` <i class="bi bi-trash"></i> 
//                 <span>Delete</span>`;

// Btn.onclick = () => tr.remove();
// td.appendChild(Btn);
// tr.appendChild(td);

// const ES=document.getElementById("emptystate");

// if(ES){
//     document.getElementById("").innerHTML="";
// }

// document.getElementById("dataTable").appendChild(TR);
//  document.getElementById("websitename").value="";
//  document.getElementById("username").value="";
//  document.getElementById("password").value="";
//    document.getElementById("cfpassword").value="";
// }


const LOCAL_STORAGE_DATA_KEY ="passwordmanagerdata";

function clearform(){
  // document.getElementById("dataTable").appendChild(TR);
 document.getElementById("websitename").value="";
 document.getElementById("username").value="";
 document.getElementById("password").value="";
   document.getElementById("cfpassword").value="";

}

function  SavePassword() {
const wb = document.getElementById("websitename").value.trim();
  const un = document.getElementById("username").value.trim();
  const ps = document.getElementById("password").value.trim();
  const cps = document.getElementById("cfpassword").value.trim();



 if (!wb || !un || !ps || !cps) {
    alert("All feilds Required");
    return;
  }

  if (ps !== cps) {
    alert("Password and Confirm Password Not Match");
    return;
  }

  const newPacket = {
    id: Math.floor(Math.random() * 100000),
    websitename: wb,
    username: un,
    password: ps,
    cfPassword: cps,
  };

  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

    localStorageData.push(newPacket);

  localStorage.setItem(
    LOCAL_STORAGE_DATA_KEY,
    JSON.stringify(localStorageData),
  );

  RenderData();
  clearform();
}


function RenderData() {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  const TableBody = document.getElementById("datatable");

  if (localStorageData <= 0) {
    TableBody.innerHTML = `
     <tr id="emptystate">
            <td colspan="5">No Saved Password Found</td>
          </tr>
    `;
    return;

  }

   TableBody.innerHTML = "";

  localStorageData.forEach((element, index) => {
    const TR = document.createElement("tr");
    TR.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.websitename}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td>
              <button class="btn btn-danger btn-sm" onclick="DeleteItem(${element.id})">
                Delete
              </button>
            </td>
    `;

    TableBody.appendChild(TR);
  });
}

RenderData();

function DeleteItem(ItemID) {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  if (localStorageData <= 0) {
    alert("Nothing to Delete");
    return;
  }

  alert(`Data deleted with item ID :  ${ItemID}`);

  const newData = localStorageData.filter((item) => item.id !== ItemID);

  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newData));

  RenderData();
}

RenderData();