import React from 'react';
import styles from './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: "GA.NG",
            content: "Content"
        };
    }
    updateContent(text) {
        this.setState({content: "Content has been changed"});
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <center>
                  <h1>{this.state.header}</h1>
                  <h2>{this.state.content}</h2>
                  <button onClick={this.updateContent.bind(this)}>Update</button>
                  <br/><br/>
                  <input type="text" placeholder="소환사이름"/>
                  <button onClick={this.updateContent.bind(this)}>검색</button>
                  </center>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default headerrrrrrrr',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;
