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
