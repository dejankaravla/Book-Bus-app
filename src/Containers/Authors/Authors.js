import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorsData from "../../Authors.json";
import Nav from "../../Components/Nav/Nav";

import classes from "./Authors.module.css";

export class Authors extends Component {
  render() {
    let work = AuthorsData.map((data, i) => {
      let dataLink = data.links.map((link) => {
        console.log(link.url);
        return (
          <div>
            <a key={Math.random()} href={link.url} rel="noopener noreferrer" target="_blank">
              {link.title}
            </a>
          </div>
        );
      });
      return (
        <div className={classes.AuthorsAll} key={Math.random()}>
          <h2>{data.name}</h2>
          <img src={data.image} alt="Author Images" />
          <div>
            <p>Born: {data.birth_date}</p>
            <p>
              {data.death_date ? "Died: " : null}
              {data.death_date}
            </p>
          </div>
          <p>Books:12</p>
          <div className={classes.UrlLinks}>{dataLink}</div>
        </div>
      );
    });

    return (
      <div className={classes.AuthorsPage}>
        <Nav />
        <div className={classes.Authors}>{work}</div>
      </div>
    );
  }
}

export default Authors;
