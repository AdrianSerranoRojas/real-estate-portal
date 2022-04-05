import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App'
import ReduxProvider from './redux/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
