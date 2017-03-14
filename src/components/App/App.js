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
        this.setState({content: "Hong멍충잉ㅎ_ㅎ"});
    }

    search(){
      alert('hello');
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <div className={styles.header}>{this.state.header}</div>
                  <h2 onClick={this.updateContent.bind(this)}>{this.state.content}</h2>
                  <br/>
                  <input type="text" placeholder="소환사닉네임" className={styles.searchForm}/>
                  <img onClick={this.search} src={require('../img/search.png')} className={styles.searchBtn}/>
                </div>
            </div>
        );
    }
}

export default App;
