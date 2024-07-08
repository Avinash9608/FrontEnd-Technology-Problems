function init() {
  let x = document.getElementById("mydiv");
  x.onclick = changeColor; // binding
}
function changeColor() {
  this.style.color = "red";
}
window.onload = init; // binding load event
