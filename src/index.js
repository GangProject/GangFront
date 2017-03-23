import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';
import searchMore from './components/searchMore/searchMore.js';
import Community from './components/Community/Community.js';

   ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="main" component={Main}/>
         <Route path="login" component={Login}/>
         <Route path="community" component={Community}/>
         <Route path="searchMore" component={searchMore}/>
       </Route>
     </Router>,
     document.getElementById('app')
   );
