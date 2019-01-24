import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import css from './styles.scss'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';

import configure from 'configureStore'
import App from 'App'

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
