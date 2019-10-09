import React from 'react'

const Form = props => {
    return (
        <form>
            <input
                type='text'
                value={props.value}
                name='list'
                onChange={props.handleTodoChange}
                placeholder='Add your to-do here'/>
        </form>
    )
}

export default Form;

// const ListForm = props => {
//     return (
//       <form>
//         <input
//           type="text"
//           value={props.value}
//           name="list"
//           onChange={props.handleTodoChange}
//           placeholder="Add a to-do"
//         />
//         <button onClick={props.addItem}>Add</button>
//         <button onClick={props.clear}>Clear Completed</button> 
//       </form>

//     );
//   }