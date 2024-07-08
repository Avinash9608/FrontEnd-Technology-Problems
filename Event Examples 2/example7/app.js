let x = document.getElementById("mytext");
x.onkeydown = (e) => {
  // x.onkeypress=(e)=>{ // it work good
  // alert("you pressed the key " + e.keyCode);
  // console.log(e.keyCode);
  console.log(e.key, e.keyCode, e.charCode);
};
