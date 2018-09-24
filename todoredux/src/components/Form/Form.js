import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';

class Form extends Component {
    render () {
        return (
            <form>
              <input name="ToDoInput" value=''></input>
              <Button name='Add' />
              <Button name='Edit' />
              <Button name='Delete' />  
            </form> 
        );
    }
}

export default Form;