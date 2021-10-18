import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {HashRouter as Router} from 'react-router-dom'
import {ContextProvider} from './Context'

ReactDOM.render(
  <ContextProvider>
    
      <h1>Hello</h1>
    
  </ContextProvider>,
  document.getElementById('root')
);

