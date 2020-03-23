# JavaScript

- JS adds behaviour to your website
- `function(message);`


## Variables

```
var name = prompt("what is your name?")
alert("Hi "+name)
```

- After a variable is defined we don't need to use `var` anymore
- Follow typical coding naming conventions
- Only alhpanumeric, $, _
- Comments `//` `/*`

## Strings
- Concatenation `"hello"+" world"`
- Length `str.length`
- Slicing `str.slice(x,y)` from x to not including y
- `toUpperCase()`

```
var name = prompt("What is your name?")
alert("Hi, "+name.slice(0,1).toUpperCase()+name.slice(1,name.length))
```

## Other Operators
- +, -, /, * , %
- x++, x--
- Math.floor()
- Math.random() (between 0 and 1 (not inclusive))

## Comparators
- ===
- !==
- >
- <
- >=
- <=
- &&/||for combining comparators

## Functions
- Basic structure

```
function getMilk() {
  ...
}
```

- Parameters and Arguments

```
function getMilk(nBottles) {
  ...
}
```

- return (similar to python return)


# Control Statements/Conditionals

```
if (track==="clear"){
  goStraight();
} else if (track==="not sure") {
  stop();
} else {
  turnRight();
}
```

## Array

```
var eggs = [1,2,3,4,5]
eggs[1]
eggs.includes(2)
eggs.push(new_egg) //...similar to append in Python
eggs.pop() //similar to list.pop() in Python
```

## While Loop

```
while (something is true) {
  do something();
}
```

```
var i = 1;

while (i<2) {
  console.log(i);
  i++;
}
```

## For Loops

```
for (i=0; i<2; i++) {
  //do something;
}
```

## Passing functions as arguments

```
function multiply(num1, num2) {
  return num1*num2;
}

function add(num1, num2){
  return num1+num2;
}

function calculatr(num1, num2, operator){
  return operator(num1, num2);
}
```

## Objects in JS

- Simple object with multiple variables

```
var dataScientist = {
  name: "Aishwarya Prabhat",
  salary: "$240,000",
  skills: ["sql", "machine learning"]
}
```

`dataScientist.salary`

- Constructor function

```
var DataScientist (name, salary, skills) {
  this.name = name,
  this.salary = salary,
  this.skills = skills
}

var bestDataScientist = new DataScientist("Aish", "$240,000", ["sql", "machine learning"])
```

## Switch Statements

```
function playSound(drumElement) {

  switch (drumElement) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio =  new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      var audio =  new Audio("sounds/tom-4.mp3");
      audio.play();
  }
}
```

## Import and Export in ES6
- Ever file can only have on default export

```
//math.js
const pi = 3.1415962;
export default pi;
```

```
//index.jss
import pieeee from "./math.js"
```

- Multiple exports/imports

```
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };

```

```
import pieeee, {doublePi, triplePi} from "./math.js"

ReactDOM.render(
  <div>
    <Heading />
    <List />
    {pieeee}, {doublePi}, {triplePi}
  </div>,
  document.getElementById("root")
);
```

- Can also use `import * as pi from "./math.js"`
