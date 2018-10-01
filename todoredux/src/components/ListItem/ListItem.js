import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './ListItem.css';


class ListItem extends Component {
    render() {
        return(
            <div className='list-item-container'>
            <span id="toDo">{this.props.toDoText}</span>
            <Button name='Edit' />
            <Button name='Delete' />  

            </div>
        );
    }
}

export default ListItem;