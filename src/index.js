import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import {ContextProvider} from './Context'

ReactDOM.render(
  <ContextProvider>
    <Router basename='/pic-some'>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);