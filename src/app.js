const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const taskInput = document.querySelector("#task");
const filter = document.querySelector('#filter');
//
loadEventListeners();

// Load All Event Listeners
function loadEventListeners() {
  form.addEventListener("submit", addTask);

  taskList.addEventListener("click", removeTask);

  clearBtn.addEventListener("click", clearTasks);

  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";

    link.innerHTML = '<i class="fa fa-remove"></li>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = "";
  }

  

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks() {
  // taskList.innerHTML = '';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}