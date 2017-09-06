import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
          <div className="App">
              <Nav/>
              <Main />
          </div>
    );
  }
}


export default App;
