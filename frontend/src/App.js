import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
    fetch("http://localhost:4000/")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                name: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
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
