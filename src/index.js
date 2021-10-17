import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './Context'

ReactDOM.render(
  <ContextProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

