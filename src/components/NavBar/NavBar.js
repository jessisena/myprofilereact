
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./NavBar.module.css";

export default class NavBar extends React.PureComponent {

  render() {

    const { style } = this.props;
    return (
      <Router>
        <div className="" style={{...style, zIndex: 1}}>
          <div className={styles.navbar}>
            <Link to={"#mybackground"}><h3 className="item-navbar">Background</h3></Link>
            <Link to={"#mywork"}><h3 className="item-navbar">My work</h3></Link>
            <Link to={"#myprojects"}><h3 className="item-navbar">Personal Projects</h3></Link>
            <Link to={"#myskills"}><h3 className="item-navbar">My Skills</h3></Link>
          </div>
        </div>
      </Router>
    );
  
  }

}