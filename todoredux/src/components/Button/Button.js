import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
   const onClickAction = () => {
        return props.onClickAction(props.itemIndex);
    }
        return (
            <div>
                <button onClick={onClickAction}> {props.name} </button>
            </div>
        );
    
}

export default Button;