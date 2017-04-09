import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './Title.css';

class Title extends Component {

    constructor(props) {
        super(props);

        this.state = {
            header: "GA.NG",
            data:""
        };
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <div className={styles.header}>{this.state.header}</div>
                  <input type="text" placeholder="소환사 이름" className={styles.searchForm}/>
                  <Link to="search"><img src={require('./Img/search.png')} className={styles.searchBtn}/></Link>
                </div>
            </div>
        );
    }
}

export default Title;
