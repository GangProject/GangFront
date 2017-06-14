import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './Title.css';

import Common from '../../Common/js/Common.js';

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: "GA.NG",
            data:"",
        };
    }

    search(){
        if($('#userName').val()==null||$('#userName').val()==""){
            alert('소환사 이름을 입력하세요');
        } else {
            location.href="search?userName="+$('#userName').val();
        }
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <div className={styles.header}>{this.state.header}</div>
                  <input type="text" placeholder="소환사 이름" id="userName" className={styles.searchForm}/>
                      <img src={require('./Img/search.png')} onClick={this.search} className={styles.searchBtn}/>
                </div>
            </div>
        );
    }
}

export default Title;
