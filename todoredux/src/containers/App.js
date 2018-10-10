import React, { Component } from 'react';
import './App.css';
import List from '../components/List/List';
import Form from '../components/Form/Form';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    toDoList : ["buy milk", "finish book", "walk dogs"]
  }
  this.addToDo = this.addToDo.bind(this);
  this.addHandler = this.addHandler.bind(this);
  this.deleteToDo = this.deleteToDo.bind(this);
  this.deleteAction = this.deleteAction.bind(this);
}

addToDo (newItemAdded){
  this.setState({
   toDoList: this.state.toDoList.concat(newItemAdded)
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


  render() {
    return (

      <div className="App">
        <div className="appContainer">
          <h1> To Do List App</h1>
            <Form name='toDoList' placeholder='To Do' addHandlerFunc={this.addHandler}/>
            <List  toDoList={this.state.toDoList} deleteAction={this.deleteAction}/>
        </div>
      </div>
    );
  }
}

export default App;
