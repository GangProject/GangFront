import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';

   ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="main" component={Main}/>
         <Route path="login" component={Login}/>
       </Route>
     </Router>,
     document.getElementById('app')
   );
