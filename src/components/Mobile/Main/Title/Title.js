import React from 'react';
import styles from './Title.css';

class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: "Mobile GA.NG",
        };
    }

    search(){
      alert('hello');
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <div className={styles.header}>{this.state.header}</div>
                  <input type="text" placeholder="소환사닉네임" className={styles.searchForm}/>
                  <img onClick={this.search} src={require('./Img/search.png')} className={styles.searchBtn}/>
                </div>
            </div>
        );
    }
}

export default Title;
