let x = document.getElementById("mytext");
x.onkeydown = (e) => {
  // here e is parameter
  alert("you pressed some key ");
  console.log(e);
};
