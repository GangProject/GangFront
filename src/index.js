import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login.js';
import SearchMore from './components/searchMore/searchMore.js';
import Search from './components/search/Search.js';
import Community from './components/Community/Community.js';
import CommunityRead from './components/Community/CommunityRead.js';
import Feedback from './components/Feedback/Feedback.js';
import Record from './components/search/Record/record.js';
import Rune from './components/search/Rune/Rune.js';
import Masterie from './components/search/Masterie/Masterie.js';
import MMR from './components/search/Mmr/Mmr.js';
import Tier from './components/search/Tier/Tier.js';
import Ingame from './components/search/Ingame/Ingame.js';
   ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Main}/>
         <Route path="main" component={Main}/>
         <Route path="login" component={Login}/>
         <Route path="community" component={Community}/>
         <Route path="community/*" component={CommunityRead}/>
         <Route path="searchMore" component={SearchMore}/>
         <Route path="search" component={Search}>
            <IndexRoute component={Record}/>
            <Route path="record" component={Record}/>
            <Route path="rune" component={Rune}/>
            <Route path="masterie" component={Masterie}/>
            <Route path="mmr" component={MMR}/>
            <Route path="tier" component={Tier}/>
            <Route path="ingame" component={Ingame}/>

         </Route>
         <Route path="feedback" component={Feedback}/>
       </Route>
     </Router>,
     document.getElementById('app')
   );
