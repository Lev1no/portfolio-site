var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createDeleteButton() {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  return deleteButton;
}

function createListElement() {
  var li = document.createElement("li");

  // Create a div or span to wrap the text content, so we can target it with CSS
  var todoText = document.createElement("span"); // or "div"
  todoText.classList.add('todo-text');
  todoText.appendChild(document.createTextNode(input.value));
  li.appendChild(todoText);

  var deleteButton = createDeleteButton();
  li.appendChild(deleteButton);

  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function handleItemClick(event) {
  // Check if the clicked element is the .todo-text span
  if (event.target.classList.contains("todo-text")) {
    event.target.classList.toggle("done");
  } else if (event.target.className === "delete") {
    // If the delete button is clicked, remove the entire list item
    var li = event.target.parentElement;
    ul.removeChild(li);
  }
}

ul.addEventListener("click", handleItemClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
