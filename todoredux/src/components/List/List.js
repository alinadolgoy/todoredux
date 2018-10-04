import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';


const List = (props) => {
    const toDoItems = props.toDoList.map((item, index) => {
        return <ListItem key={index} index={index} toDoText={item} onClickAction={props.deleteAction} />
    });

        return (
            <div>
           {toDoItems}
           </div>
        );

}

export default List;
