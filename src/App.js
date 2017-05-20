import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="App-Intro" >
          <input type="text" name='Todo' placeholder='Create a todo...'/>
        </form>
      </div>
    );
  }
}

export default App;
