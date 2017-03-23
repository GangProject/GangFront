import { Link } from 'react-router';
import React from 'react';

import Top from './Main/Top/Top';
import Main from './Main/Main.js';
import Footer from './Main/Footer/Footer';

class App extends React.Component {
    render() {
        return (
                <div>
                    <Top/>
                    <Main/>
                    <Footer/>
                </div>
        );
    }
}

export default App;
