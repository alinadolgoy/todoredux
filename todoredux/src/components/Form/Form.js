import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './Form.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newToDo : 'test'
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ newToDo: event.target.value });
    }

     handleSubmit (event) {
         event.preventDefault();
         console.log(this.state.newToDo);
         this.props.addHandlerFunc(this.state.newToDo);
    } 
  

    render () {
       
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text'  onChange={this.handleChange}></input>
                <button type='submit'> Add </button>              
            </form> 
        );
    }
}

export default Form;


