import React from 'react';
import Item from './Todo';

const FormList = props => {
  console.log(props);
  return (
    <div className="todo-list">
        {props.lists.map(item => (
          <Item 
            key={item.id} 
            item={item} 
            toggleItem={props.toggleItem} 
          />
        ))}
    </div>
  );
};

export default FormList;