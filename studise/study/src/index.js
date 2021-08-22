import React from 'react';
import ReactDOM from 'react-dom';
import ApiIntegrate from './api/ApiIntegrate';
import App from './App';
import App1 from './App1';
import Hook_useEffect from './contact/App';
import Counter from './Counter';
import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <App1 />
    <hr />
    <TodoApp />
    <hr />
    <Hook_useEffect />
    <Counter />
    <ApiIntegrate />
  </React.StrictMode>,
  document.getElementById('root'),
);
