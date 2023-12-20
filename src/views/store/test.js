// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { remove } from 'lodash-es'
import cryptoRandomString from 'crypto-random-string';

// Define initial state
const initialState = {
  loginUser: {
    name: 'Soujanya patra',
    designation: 'Frontend developer',
    email: 'soujayap@zignuts.com',
    id: cryptoRandomString({length: 8, type: 'url-safe'}),
  },
  items: [
    {
      name: 'Laptop',
      id: cryptoRandomString({length: 6, type: 'url-safe'}),
      price: '$1200'
    },
    {
      name: 'Mobile',
      id: cryptoRandomString({length: 6, type: 'url-safe'}),
      price: '$500'
    },
    {
      name: 'Monitor',
      id: cryptoRandomString({length: 6, type: 'url-safe'}),
      price: '$700'
    },
    {
      name: 'Keyboard',
      id: cryptoRandomString({length: 6, type: 'url-safe'}),
      price: '$50'
    },
    {
      name: 'Mouse',
      id: cryptoRandomString({length: 6, type: 'url-safe'}),
      price: '$20'
    }
  ]
};

const deleteItemConfirm = (state, id) => {
  remove(state.items, (i) => i.id === id)
}

const updateContentConfirm = (items, item) => {
  items?.find((el) => {
    if(el.id === item.id) {
      el.name = item.name
      el.price = item.price
    }
    return el
  })
}

// Create a slice
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      // Filter out the item with the specified ID
      deleteItemConfirm(state, action.payload)
    },
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    updateItem: (state, action) => {
      updateContentConfirm(state.items, action.payload)
    }
  },
});

// Export the action creator
export const { deleteItem, addItem, updateItem } = itemsSlice.actions;

// Create the reducer
const reducer = itemsSlice.reducer;

// Create the store
const store = configureStore({
  reducer,
});

export default store;
