import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/Top/Top';
import App from './components/App/App';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

ReactDOM.render(<Top/>, document.getElementById('top'));
ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<Info/>, document.getElementById('info'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
