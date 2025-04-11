import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numbers = [ "A", "2","3","4","5","6","7","8","9","10","J","Q","K"]

  let allIcon = ["♦", "♥", "♠", "♣"]

  generateRandomCard(numbers, allIcon) 
  

 
};

function generateRandomCard(numberArray, iconArray) {
  let iconTop = document.getElementById("top")
  let numberCenter = document.getElementById("numbers")
  let iconBottom = document.getElementById("bottom")

  let randomNumber = numberArray[Math.floor(Math.random()*numberArray.length)]
  let randomIcon = iconArray[Math.floor(Math.random()*iconArray.length)]

  if (randomIcon == "♦" || randomIcon == "♥") {
    iconTop.style.color = "red"
    numberCenter.style.color = "red"
    iconBottom.style.color = "red"
  } else {
    iconTop.style.color = "black"
    numberCenter.style.color = "black"
    iconBottom.style.color = "black"
  }

  iconTop.innerHTML = randomIcon
  numberCenter.innerHTML = randomNumber
  iconBottom.innerHTML = randomIcon
  

}



// generateRandomCard(otherNumbers)