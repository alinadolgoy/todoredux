import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
     onclickAction = () => {
        return this.props.onClickAction(this.props.key);
    }
    render () {
        return (
            <div>
                <button onClick={onClickAction}> {this.props.name} </button>
            </div>
        );
    }
}

export default Button;