import "./index.css";

// DOM Selection
const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-user-input]");
const taskList = document.querySelector(".form-control");

// State
const state = [];

function renderTasks() {
  state.forEach((task) => {
    const label = document.createElement("label");
    label.classList.add("label", "cursor-pointer");
    label.innerHTML = `
    <span class="label-text">${task.text}</span>
    <input type="checkbox" class="checkbox checkbox-primary" />
    `;
    taskList.appendChild(label);
  });
}

// On form submit (new task)
formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // Avoid refresh

  if (!inputEl.value) return; // Don't run on empty

  state.push({
    id: crypto.randomUUID(),
    text: inputEl.value,
    isCompleted: false,
  });

  renderTasks();

  inputEl.value = ""; // Clear the input
});
