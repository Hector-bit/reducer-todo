import React, { useState } from 'react';

export const Data = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Finsih project',
    completed: false,
    id: 3987653456
  },
  {
    item: 'Look at tomorrows videos',
    completed: false,
    id: 3609876543
  }
];

export const reducer = (state, action) => {
    return console.log(state)
}