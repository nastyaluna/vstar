import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import App from './App/App';
import './index.css';

const store = configureStore();
const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootElement
  );
}

render();
