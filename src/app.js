import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let allIcon = ["♦", "♥", "♠", "♣"]
  let iconTop = document.querySelector("#top")
  iconTop.innerHTML = allIcon[Math.floor(Math.random()*allIcon.length)]

  console.log("Hello Rigo from the console!");
};
