import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import './ListItem.css';

const ListItem = (props) => {
    const delAction = () => {
        props.onClickAction();
    }

    const toggleAction1 = () => {
        props.toggleAction(props.index);
    }

    let doneStyle = {color: 'red'};

    const isToDoDoneCheck = () => {
        if (props.toDoDone) {
            doneStyle = {textDecorationLine : 'line-through'};
        }
        else {
            doneStyle = {textDecorationLine : "none"};
        }
        return doneStyle;
    }

    isToDoDoneCheck();

   

    return (
    <div className='list-item-container'>
        <span id="toDo" style={doneStyle} onClick={toggleAction1}> {props.toDoText}</span>
        <Button name='Delete' onClickAction={delAction} itemIndex={props.index}/>  
    </div>
    );
}

export default ListItem;

