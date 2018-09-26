import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './Form.css';

class Form extends Component {
    render () {
        return (
            <form>
              <input name="ToDoInput" value=''></input>
              <Button name='Add' />
            </form> 
        );
    }
}

export default Form;