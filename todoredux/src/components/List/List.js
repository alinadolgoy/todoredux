import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';


class List extends Component {
    render () {
        const toDoItems = this.props.toDoList.map((item, index) => {
            return <ListItem key={index} toDoText={item}/>
        });
        return (
            <div>
           {toDoItems}
           </div>
        );
    }
}

export default List;
