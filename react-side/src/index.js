import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import { Router, browserHistory } from 'react-router'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
