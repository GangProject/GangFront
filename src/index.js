import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/Top/Top';
import App from './components/App/App';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

var data = [{ "when": "2 minutes ago",
              "who": "Jilaal Dupre",
              "description": "Created new account"
            },
            {
              "when": "1 hour ago",
              "who": "Losaae White",
              "description": "Added fist chapter"
            }];
var headings = ['When', 'Who', 'Description'];
var props = { headings:headings, changeSets:data }

ReactDOM.render(<Top/>, document.getElementById('top'));
ReactDOM.render(<App {...props} />, document.getElementById('app'));
ReactDOM.render(<Info/>, document.getElementById('info'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
