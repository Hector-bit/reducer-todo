function TodoItem({ title, completed, dispatch }){
    return (
      <div className='todoItem'>
        <p>{title}</p>
        <div>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => 
            dispatch({ type: 'toggleTodoCompleted', payload: title })}
          />
        </div>
      </div>
    )
  };

  export default TodoItem;