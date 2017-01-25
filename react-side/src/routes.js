import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Signup from './components/Signup'
import Login from './components/Login'

export default (
 <Route path="/" component={App} >
  <Route path="signup" component={Signup} />
  <Route path="login" component={Login}/>
 </ Route>
);

// <IndexRoute component={Welcome}/>
