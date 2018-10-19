import React, { Component } from 'react';
import './App.css';
import List from '../components/List/List';
import Form from '../components/Form/Form';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    toDoList : [
      { 
        text : "buy milk",
        done: true
      }, 
      {
        text: "finish book",
        done: false},
      {
        text: "walk dogs",
        done: false}
    ]
  }
  this.addToDo = this.addToDo.bind(this);
  this.addHandler = this.addHandler.bind(this);
  this.deleteToDo = this.deleteToDo.bind(this);
  this.deleteAction = this.deleteAction.bind(this);
}

addToDo (newItemAdded){
  let newToDo = {
    text: newItemAdded,
    done: false
  }
  this.setState({
   toDoList: this.state.toDoList.concat(newToDo)
  });
}

addHandler (newItem) {
  //the work of fiding the input value happens here
  this.addToDo(newItem);
}

deleteToDo (item) {
  this.setState({
    toDoList: this.state.toDoList.splice(item, 1)
  })
}

deleteAction (index) {
  this.deleteToDo(index);
}

toggleToDo (item) {
  this.setState({
    toDoList: this.state.toDoList.done = true  })
}

toggleAction (index) {
  this.toggleToDo(index);
}


  render() {
    return (

      <div className="App">
        <div className="appContainer">
          <h1> To Do List App</h1>
            <Form name='toDoList' placeholder='To Do' addHandlerFunc={this.addHandler}/>
            <List  toDoList={this.state.toDoList} deleteAction={this.deleteAction} toggleAction={this.toggleAction} />
        </div>
      </div>
    );
  }
}

export default App;
