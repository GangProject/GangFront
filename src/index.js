import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';
import SearchMore from './components/searchMore/searchMore.js';
import Search from './components/searchMore/searchMore.js';
import Community from './components/Community/Community.js';

   ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="main" component={Main}/>
         <Route path="login" component={Login}/>
         <Route path="community" component={Community}/>
         <Route path="searchMore" component={SearchMore}/>
         <Route path="search" component={Search}/>
       </Route>
     </Router>,
     document.getElementById('app')
   );
