// Random numbers between 1 and 6 for players 1 and 2 
var player1Nr = Math.floor(Math.random() * 6) + 1;
var player2Nr = Math.floor(Math.random() * 6) + 1;

//displaying the random numbers as numbers on dice image
var player1Dice = document.querySelector(".img1");
var player2Dice = document.querySelector(".img2");

player1Dice.setAttribute("src", "images/dice" + player1Nr + ".png");
player2Dice.setAttribute("src", "images/dice" + player2Nr + ".png");