import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/PC/Main/Top/Top';
import Title from './components/PC/Main/Title/Title';
import Info from './components/PC/Main/Info/Info';
import Footer from './components/PC/Main/Footer/Footer';

ReactDOM.render(<Top/>, document.getElementById('top'));
ReactDOM.render(<Title/>, document.getElementById('title'));
ReactDOM.render(<Info/>, document.getElementById('info'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
