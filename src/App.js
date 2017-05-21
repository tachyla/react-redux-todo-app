import React, { Component } from 'react';
import {connect} from 'react-redux';

import {createTodo, completedTodo} from './actions/todos';

import './App.css';

class App extends Component {

  state = {
    text: ''
  }
handleSubmit = e => {
  e.preventDefault();
  this.props.createTodo(this.state.text);
  this.setState({
    text: ''
  })
}

enterText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
}

handleCheckbox = id => {
  this.props.completedTodo(id);
}

  render() {
    return (
      <div className='App'>
        <form className="App-Intro"
              onSubmit={this.handleSubmit} >

          <input value={this.state.text} 
                 onChange={this.enterText} 
                 type='text' 
                 name='text' 
                 placeholder='Create a todo...'/>
        </form>
        <br/>
        {/*{this.props.todos.map(todo => (*/}
           {this.props.todos.map(({text, id, completed}) => (
          <div key={id}>
            {text}
            <input type="checkbox" 
                   value={completed} 
                   onChange={() => this.handleCheckbox(id)}/>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}), { createTodo, completedTodo })(App);
