import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: ''
  }

  enterText = e => {
    // console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    return (
      <div className='App'>
        <form className="App-Intro" >
          <input value={this.state.text} 
                 onChange={this.enterText} 
                 type='text' 
                 name='text' 
                 placeholder='Create a todo...'/>
        </form>
      </div>
    );
  }
}

export default App;
