import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import axios from "axios";
// import Authors from "./Authors.json";

import Authors from "./Containers/Authors/Authors";

class App extends Component {
  state = {
    tolkien: null,
  };

  componentDidMount() {
    axios
      .get("https://openlibrary.org/author/OL74490A.json")
      .then((response) => {
        // const tolkien = {
        //   name: response.data.name,
        //   photos: response.data.photos,
        // };

        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route to="/" component={Authors} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
