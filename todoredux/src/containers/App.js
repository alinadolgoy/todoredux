import React, { Component } from 'react';
import './App.css';
import List from '../components/List/List';
import Form from '../components/Form/Form';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    toDoList : ["buy milk", "finish book", "walk dog"]
  }
  this.addToDo = this.addToDo.bind(this);
  this.addHandler = this.addHandler.bind(this);
}

addToDo (newItemAdded){
  this.setState((state) => {
  state.toDoList.push(newItemAdded);
});
}

addHandler (newItem) {
  //the work of fiding the input value happens here
  this.addToDo(newItem);
}



  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <h1> To Do List App</h1>
            <Form name='toDoList' placeholder='To Do' addHandlerFunc={this.addHandler}/>
            <List  toDoList={this.state.toDoList} />
        </div>
      </div>
    );
  }
}

export default App;
