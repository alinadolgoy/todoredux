import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './Form.css';

class Form extends Component {
    
     handleSubmit (event) {
         event.preventDefault();
        console.log(event.target.value);
        this.props.addHandlerFunc(event.target.value);
    } 
  

    render () {
       
        return (
            <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} />
            <button type='submit' value='Add' />              
            </form> 
        );
    }
}

export default Form;

//<Button name='Add' onClickFunc={this.props.addHandlerFunc} newToDoValue={"new"} />

