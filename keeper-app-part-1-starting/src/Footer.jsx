import  React from "react";

var date = new Date();
var year = date.getFullYear();

function Footer() {
  return <p>Copyright© {year}</p>;
}

export default Footer