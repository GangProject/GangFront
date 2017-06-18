import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './Title.css';

import Common from '../../Common/js/Common.js';
import Info from "../Info/Info";

class Title extends Component {

    constructor(props) {
        super(props);

        this.state = {
            header: "GA.NG",
            data:"",
        };

    }

    componentDidMount() {
        $('#userName').focus();
    }

    search(){
        if($('#userName').val()==null||$('#userName').val()==""){
            alert('소환사 이름을 입력하세요');

        } else {
            location.href="search?userName="+$('#userName').val();
        }
    }

    pressEnter(event){
        if(event.key == 'Enter') {
            if($('#userName').val()==null||$('#userName').val()==""){
                alert('소환사 이름을 입력하세요');

            } else {
                location.href="search?userName="+$('#userName').val();
            }
        }
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles.video_background}>
                        <div className={styles.video_foreground}>
                            <iframe src="https://www.youtube.com/embed/sckt02Virsc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                  <div className={styles.header}>{this.state.header}</div>
                    <div className={styles.title_field}>
                  <input type="text" placeholder="소환사 이름" onKeyPress={this.pressEnter} id="userName" className={styles.searchForm} autoFocus/>
                  <img src={require('./Img/search.png')} onClick={this.search} className={styles.searchBtn}/>
                    </div>
                </div>
                <div>
                    <Info/>
                </div>
            </div>
        );
    }
}

export default Title;
