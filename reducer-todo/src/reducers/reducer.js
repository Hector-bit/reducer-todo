

// export const initialState = [{
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   },
//   {
//     item: 'Finsih project',
//     completed: false,
//     id: 3987653456
//   },
//   {
//     item: 'Look at tomorrows videos',
//     completed: false,
//     id: 3609876543
//   }
// ];

// export const initialState = {
//     completed: false,
//     item: 'Learn reducer',
//     id: 3609876543
//   };

  export const initialState = {
    completed: false,
    item: 'Learn about reducers',
    id: 3609876543
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_EDIT':
        return {
          ...state,
          editing: !state.editing
        };
      case 'SET_TITLE':
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case 'ADD_NEW_GROCERY_ITEM':
        const newGrocery = {
          name: action.payload,
          id: Date.now(),
          purchased: false
        };
        return {
          ...state,
          groceries: [...state.groceries, newGrocery]
        };
      default:
        return state;
    }
  };