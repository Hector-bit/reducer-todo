import React from 'react';

const Item = props => {
  return (
    <div
      // className={`item${props.item.completed ? ' purchased' : ''}`}
      style={props.item.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Item;