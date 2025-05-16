const button = document.getElementById("btn");
const container = document.getElementById("container");

button.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.textContent = prompt("input your to-do", "");
  container.appendChild(newElement);
});
