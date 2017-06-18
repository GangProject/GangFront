import React, {Component} from 'react';

import Top from './Top/Top';
import Footer from './Main/Info/Info';

class App extends Component {
    render() {
        return (
                <div>
                    <Top/>
                    {this.props.children}
                    {/*<Footer/>*/}
                </div>
        );
    }
}

export default App;
