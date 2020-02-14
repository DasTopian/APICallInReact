import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return <h1>Irrelevant!</h1>;
  }
}

export default App;
