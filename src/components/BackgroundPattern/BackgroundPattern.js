import React from "react";
import "./BackgroundPattern.css";

//http://www.heropatterns.com/
const BackgroundPattern = ({ pttrn, children }) => {

  return <div className={pttrn}> {children} </div>

}

export default BackgroundPattern;
  
