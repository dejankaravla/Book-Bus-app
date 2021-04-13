import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

import Logo from "../../assets/2a4df6b2d720488cb7f530a02bf9c588 (2).png";

export class Nav extends Component {
  render() {
    return (
      <div className={classes.Nav}>
        <img src={Logo} alt="Logo" />
        <div className={classes.AllLinks}>
          <Link to="/">Home</Link>
          <Link to="/Authors">Authors</Link>
          <Link to="/Books">Books</Link>
        </div>
        <div className={classes.SerachBar}>
          <input placeholder="Search"></input>
          <select>
            <option>Author</option>
            <option>Book</option>
          </select>
          <label>123</label>
        </div>
      </div>
    );
  }
}

export default Nav;
