const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["green", "purple", "blue", "red", "indigo", "orange", "pink"];

body.style.backgroundColor = "green";

button.addEventListener("click", changeB);

function changeB() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}

// End of creating a responsive click me button project.....
