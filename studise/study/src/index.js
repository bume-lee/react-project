import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ApiIntegrate from './api/ApiIntegrate';
import App from './App';
import App1 from './App1';
import Hook_useEffect from './contact/App';
import Counter from './Counter';
import TodoApp from './TodoApp';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import CounterContainer from './redux_Counter/CounterContainer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <hr />
      <App1 />
      <hr />
      <TodoApp />
      <hr />
      <Hook_useEffect />
      <hr />
      <Counter />
      <hr />
      <ApiIntegrate />
      <hr />
      <CounterContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
