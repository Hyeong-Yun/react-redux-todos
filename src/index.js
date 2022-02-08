import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import {addTodo, complete_todo as completeTodo}  from './redux/actions';

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(addTodo("할일"))
store.dispatch(completeTodo(0))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
