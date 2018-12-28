
import React from "react";
import { HashLink as Link, NavHashLink as NavLink } from "react-router-hash-link";

import styles from "./NavBar.module.css";

export default class NavBar extends React.PureComponent {

  render() {

    const { style } = this.props;
    return (
      <div className="" style={{...style, zIndex: 1}}>
        <div className={styles.navbar}>
          <h3 className="item-navbar">Background</h3>
          <h3 className="item-navbar">My work</h3>
          <h3 className="item-navbar">Personal Projects</h3>
          <NavLink to={"#myskills"}><h3 className="item-navbar">My Skills</h3></NavLink>
        </div>
      </div>
    );
  
  }

}