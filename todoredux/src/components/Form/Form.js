import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDo : ''
        }
    }

    onChange = (event) => {
        this.setState(
            {toDo: event.target.value}
        );
    }
    
    onSubmit = (event) => {
        event.preventDefault(); 
        return this.props.addHandlerFunc(this.state.toDo);

    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input  value={this.state.toDo} onChange={this.onChange}></input>
                <button> Add </button>              
            </form> 
        );
    }
}

export default Form;


