var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomNumber2 = Math.floor((Math.random()*6)) + 1;

var image1 = "images/dice" + randomNumber1 +".png";
var image2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomNumber1 > randomNumber2){
  document.querySelector(".heading").style.fontFamily = "'Shadows Into Light', cursive";
  document.querySelector("h1").innerHTML = "<i class='fas fa-smile-beam'></i>    <b>Player 1 Won</b>";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".heading").style.fontFamily = "'Shadows Into Light', cursive";
  document.querySelector("h1").innerHTML = "<i class='fas fa-smile-beam'></i>    <b>Player 2 Won</b>";
} else {
  document.querySelector(".heading").style.fontFamily = "'Shadows Into Light', cursive";
  document.querySelector("h1").innerHTML = "<i class='fas fa-frown'></i>    <b>Draw</b>";
}
