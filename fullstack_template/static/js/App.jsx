import React, { Component } from "react";
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      greeting: "",
    };
  }

  componentDidMount() {
    axios.get(window.location.href + 'hello').then(response => {
      this.setState({greeting: response.data.hello});
    });
  }

  render () {
    // this.getPythonHello();
    return <p> {this.state.greeting}!</p>;
  }
}