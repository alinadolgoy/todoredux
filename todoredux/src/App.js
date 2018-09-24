import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';


const ToDoArr = [];

const add = () => {

}

const edit = () => {

}

const del = () => {

}

const bttns = [
{ btname: 'add', btfunc : add },
{ btname: 'edit', btfunc: edit },
{ btname: 'delete', btfunc: del }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <h1> To Do List App</h1>
           <Form name='toDoList' placeholder='To Do' bttns={bttns} />
            <List  />
        </div>
      </div>
    );
  }
}

export default App;
