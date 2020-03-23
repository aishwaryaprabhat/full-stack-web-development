## Intro to JSX and Babel

- Babel helps in compiling crazy high-end JS into standard JS that any browser can understand
- The React module below is required for using JS to 'write' HTML

```
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
```

```
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
```


- Multiple HTML elements in one render function

```
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello!</h1>
    <p>Helloooo!!!!!</p>
  </div>,
  document.getElementById("root")
);
```

```
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello!</h1>
    <p>Helloooo!!!!!</p>
    <ul>
      <li>Ramen</li>
      <li>Ramen</li>
      <li>Ramen</li>
    </ul>
  </div>,
  document.getElementById("root")
);

```

## Inseritng JS code in HTML in React
- We use {} to insert expressions (not statements)
- We cant right JS statements like if-else statements

```
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

var a = 6;
ReactDOM.render(
  <div>
    <h1>Hello!</h1>
    <p>{a}</p>
  </div>,
  document.getElementById("root")
);
```


## Styling using CSS

```
import React from "react";
import ReactDOM from "react-dom";

var a = 7;
ReactDOM.render(
  <div>
    <h1 className="heading">Hello!</h1>
    <p>{a}</p>
  </div>,
  document.getElementById("root")
);
```

```
.heading {
  color: red;
}
```

## Inline Styling

```
import React from "react";
import ReactDOM from "react-dom";


const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}

customStyle.color = "blue";

var a = 7;
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>Hello!</h1>
    <p>{a}</p>
  </div>,
  document.getElementById("root")
);
```

## Example: Change styling based on some logic
- Greeting changes color based on timing

```
import React from "react";
import ReactDOM from "react-dom";


const customStyle = {
  color: "red",  
}

var d = new Date(2020, 1, 1);
var now = d.getHours();

if (now < 12) {
  customStyle.color = "red";

} else if (now>12 & now<19){
  customStyle.color = "blue";

} else {
  customStyle.color = "green";
}


// customStyle.color = "blue";

var a = 7;
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>Hello!</h1>
    <p>{a}</p>
  </div>,
  document.getElementById("root")
);
```


## React Components
- Splitting large file into smaller components for ease of debugging and reusability
- [Airbnb style guide](https://github.com/airbnb/javascript)
- Example
  -  We have a file called "Heading.jsx"

```
import  React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading
```

  - Our index.js will ue it by importing

```
  import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading"

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```
