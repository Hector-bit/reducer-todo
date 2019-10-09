import React, { useState, useReducer, useImmerReduce } from 'react';
import Form from './components/Form';
import FormList from './components/FormList';
// import { initialState, reducer } from './reducers/reducer';

function loginReducer(draft, action){
  switch(action.type){
    case 'field': {
      draft[action.fieldName] = action.payload;
      return;
    }
    case 'login': {
      draft.error = '';
      draft.isLoading = true;
      return;
    }
    case 'success': {
      draft.isLoggedIn = true;
      draft.isLoading = false;
      draft.username = '';
      draft.password = '';
      return;
    }
    case 'error': {
      draft.error = 'Incorrect password or username';
      draft.isLoggedIn = false;
      draft.isLoggedIn = false;
      draft.username = '';
      draft.password = '';
      return;
    }
    case 'logOut': {
      draft.isLoggedIn = false;
      return;
    }
    case 'toggleTodoCompleted': {
      const todo = draft.todos.find(item => item.title === action.payload);
      todo.completed = !todo.completed
      return;
    }
    default: 
    return;
  }
}

const todos = [
  {
    title: 'learn reduce',
    completed: true
  },
  {
    title: 'finish project',
    completed: false
  },
  {
    title: 'finish lecture vids',
    completed: false
  }
];

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
  todos,
};

export default function LoginUseCOntext() {
  const [state, dispatch] = useImmerReduce(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn, todos } = state

  const onSubmit = async e => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      // await login({ username, password });
      dispatch({ type: 'success' });
    } catch (error){
      dispatch({ type: 'error' });
    }
  };

  return (
    <div className='app'>
      <div className='container'>
        {/* <form className='form' onSubmit={onSubmit}>
          {error && <p className='error'>{error}</p>}
        </form> */}
        <TodoPage todos={todos} dispatch={dispatch}/>
      </div>
    </div>
  )
}

function TodoPage ({ todos, dispatch }){
  console.log(todos);
  return (
    <div className='todoContainer'>
      <h2>Todos</h2>
      {todos.map(item => {
        <TodoItem 
        key={item.title} 
        dispatch={dispatch} 
        {...item}>
        </TodoItem>
      })}
    </div>
  )
};

function TodoItem({ title, completed, dispatch }){
  return (
    <div className='todoItem'>
      <p>{title}</p>
      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => {
            dispatch({ type: 'toggleTodoCompleted', payload: title })
          }
        }
        />
      </div>
    </div>
  )
}



// function App() {

//   const [{ item, completed }, dispatch] = useReducer(reducer, initialState);
//   const [newTodoText, setNewTodoText] = useState('');

//   const handleChanges = e => {
//     setNewTodoText(e.target.value);
//   };

//     return (
//       <div>
//         <h1>TO-DO LIST</h1>
//         {!completed ? (
//           <h1>
//             {item}{' '}
//             <i
//               className="far fa-edit"
//               onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
//             />
//           </h1>
//         ) : (
//           <div>
//             <input
//               className="title-input"
//               type="text"
//               name="newTitleText"
//               value={newTodoText}
//               onChange={handleChanges}
//             />
//             <button
//               onClick={() =>
//                 dispatch({ type: 'SET_TITLE', payload: newTodoText })
//               }
//             >
//               Update title
//             </button>
//           </div>
//         )}
//       </div>
//     );
// }

// export default App;
