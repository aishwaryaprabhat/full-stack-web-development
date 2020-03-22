// document.querySelector("button").classList.add("drum-kit-button")
// document.querySelector(".drum-kit-button").addEventListener("click", handleClick);

function handleClick(){
  alert("Button has been clicked motherfucker!!!!!");
}


for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
