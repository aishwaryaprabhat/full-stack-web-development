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
