// var fs = require('fs');
// var files = fs.readdirSync('./images/');

var maximum = 1
var minimum = 6

var randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
document.querySelector(".img1").setAttribute("src", "images/dice"+String(randomNum)+".png")
var randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
document.querySelector(".img2").setAttribute("src", "images/dice"+String(randomNum)+".png")
