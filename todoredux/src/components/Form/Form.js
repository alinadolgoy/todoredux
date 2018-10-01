import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './Form.css';

class Form extends Component {

  

    render () {
       let textInput;
        return (
            <form onSubmit={(event) => {
                event.preventDefault(); 
                return          this.props.addHandlerFunc(textInput.value);

            }}>
                <input ref={ node => textInput = node} type='text'></input>
                <button type='submit'> Add </button>              
            </form> 
        );
    }
}

export default Form;


