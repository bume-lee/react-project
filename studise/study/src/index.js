import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';
import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App1 />
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
