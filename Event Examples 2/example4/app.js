let x = document.getElementById("mypic");
x.onmouseover = () => {
  //   x.setAttribute("src", "../../media/images/bg2.jpg");
  x.src = "../../media/images/bg2.jpg"; // x is also a node which is img
};

x.onmouseout = () => {
  //   x.setAttribute("src", "../../media/images/bg1.jpg");
  x.src = "../../media/images/bg1.jpg";
};
