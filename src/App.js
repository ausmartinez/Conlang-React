import React from 'react';
import logo from './logo.svg';
import './App.css';
import Guy from './Guy.js';
import TurtleDB from 'turtledb';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
    const mydb = new TurtleDB('example');
    // Link a remote tortoiseDB database to sync to
    mydb.setRemote('http://127.0.0.1:4000');

    // CRUD Operations - all return promises
    mydb.create({ _id: 'firstTurtle', species: 'Sea Turtle' });
    let turt = mydb.read('firstTurtle');
    let ace = turt.then(result => {
      this.setState({name : result.name});
    });

    // Sync
    mydb.sync();
  }

  render() {
    console.log("waffles");
    console.log(this.state.name);
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <Guy />
      </div>
    )
  }
}

export default App;
