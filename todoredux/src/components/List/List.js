import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';


const List = (props) => {
    const toDoItems = props.toDoList.map((item, index) => {
        return <ListItem key={index} index={index} toDoText={item.text} toDoDone={item.done} onClickAction={props.deleteAction} toggleAction={props.toggleAction} />
    });

        return (
            <div>
           {toDoItems}
           </div>
        );

}

export default List;
