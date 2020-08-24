import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './component/App';
import todoReducer from './reducer/reducer';
  
  // ========================================
  const store = createStore(todoReducer,composeWithDevTools());
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,

    document.getElementById('root')
  );

 