import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';
import SearchMore from './components/searchMore/searchMore.js';
import Search from './components/search/Search.js';
import Community from './components/Community/Community.js';
import Feedback from './components/Feedback/Feedback.js';
import Record from './components/search/Record/Record.js';

   ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="main" component={Main}/>
         <Route path="login" component={Login}/>
         <Route path="community" component={Community}/>
         <Route path="searchMore" component={SearchMore}/>
         <Route path="feedback" component={Feedback}/>
         <Route path="search" component={Search}>
            <Route path="search/record" component={Record}/>
         <Route/>
         <Route path="search/record" component={Record}/>
       </Route>
     </Router>,
     document.getElementById('app')
   );
