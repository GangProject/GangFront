import React from 'react';

import Top from './Top/Top';
import Footer from './Footer/Footer';

class App extends React.Component {
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
