import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './ListItem.css';

const ListItem = (props) => {
    const delAction = () => {
        props.onClickAction;
    }

    return (
    <div className='list-item-container'>
        <span id="toDo">{props.toDoText}</span>
        <Button name='Edit' />
        <Button name='Delete' onClickAction={delAction} key={props.index}/>  
    </div>
    );
}

export default ListItem;

//