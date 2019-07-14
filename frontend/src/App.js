import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "A Name Goes Here"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default App;
