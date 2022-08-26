//grandparent container
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//toolkit
import { configureStore } from '@reduxjs/toolkit';
//to show that store will be inside the app
import { Provider } from 'react-redux';
//reducer
import userReducer from './Features/user'
import modeReducer from './Features/mode'

//store => container storing all the state globally
//1)also contains all the reducers used in the program
const store = configureStore({
  //will list all reducers here
  reducer:{
    user:userReducer,
    mode:modeReducer,
  }
})


//reducer => prev.state and action of state => returns updated state

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*THIS IS THE STORE WE USE IN THIS APP */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);