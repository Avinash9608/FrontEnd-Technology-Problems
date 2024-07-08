let x = document.getElementById("mytext");
// x.onkexydown = () => {
//   alert("you pressed some key");
// };

x.onkeypress = () => {
  // this event is deprecated
  alert("you pressed some key");
};
