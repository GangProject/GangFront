import React, {Component} from 'react';

import Top from './Top/Top';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
                <div>
                    <Top/>
                    {this.props.children}
                    <Footer/>
                </div>
        );
    }
}

export default App;
