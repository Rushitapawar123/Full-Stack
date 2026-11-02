let currentFilter = "all";

function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  if (newTask === "") {
    return;
  }
  const Li = document.createElement("li");
  Li.classList.add("p-3");

  const ROW = document.createElement("div");
  ROW.classList.add(
    "form-control",
    "d-flex",
    "align-items-center",
    "gap-3",
    "mb-2",
  );

  const CHEK = document.createElement("input");
  CHEK.type = "checkbox";
  CHEK.classList.add("form-check-input", "mt-0");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;
  SPAN.classList.add("flex-grow-1");

  //   const BUTTON = document.createElement("button");

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm"); 
  BUTTON.textContent = "Delete";

  CHEK.onchange = () => {
    Li.classList.toggle("done", CHEK.checked);
    SPAN.classList.toggle("text-decoration-line-through", CHEK.checked);
    SPAN.classList.toggle("text-muted", CHEK.checked);
    updateCount();
    applyFilter();
  };
  BUTTON.onclick = () => {
    Li.remove();
    updateCount();
  };

  ROW.appendChild(CHEK);
  ROW.appendChild(SPAN);
  ROW.appendChild(BUTTON);
  Li.appendChild(ROW);

  document.getElementById("taskList").appendChild(Li);

  document.getElementById("taskInput").value = "";
  updateCount();
  applyFilter();
}

function updateCount() {
  const total = document.querySelectorAll("#taskList li").length;
  const done = document.querySelectorAll("#taskList li.done").length;

  document.getElementById("totalcount").textContent = total;
  document.getElementById("donecount").textContent = done;
  document.getElementById("pendingCount").textContent = total - done;
}

function setFilter(type) {
  currentFilter = type;
  applyFilter();
}

function applyFilter() {
  document.querySelectorAll("#taskList li").forEach((li) => {
    const isDone = li.classList.contains("done");

    const show =
      currentFilter === "all" ||
      (currentFilter === "done" && isDone) ||
      (currentFilter === "pending" && !isDone);

    li.classList.toggle("d-none", !show);
  });
}

document.getElementById("taskInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
