import React, {Component} from 'react';
import Common from '../../Common/js/Common.js';
import styles from './Info.css';
import {Link} from "react-router";

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gamelist: [],
            now: ""
        };
    }

    componentDidMount() {
        this.getGameInfo();
    }

    getGameInfo() {
        var addr = Common.getApi();
        return $.getJSON(addr + 'api/Home/gameInfo')
            .then((data) => {
                this.setState({
                    gamelist: data,
                    now: ""
                });
            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }



    leftArrow() {
        alert('left');
    }

    rightArrow() {
        alert('right');
    }

    render() {
        var message = "";
        if(this.state.gamelist.length==0){
            message+="오늘 경기는 없습니다";
        }
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    대회정보<br/>
                </div>
                <span className={styles.nomsg}>
                    {message}
                </span>
                {
                    this.state.gamelist.map((list, i) => {
                        return (
                            <ChampionshipInfo key={i}
                                              left={list.leftTeam}
                                              right={list.rightTeam}
                                              status={list.status}
                                              gameTime={list.time}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

class ChampionshipInfo extends Component {
    openTwitch(){
        window.open("https://www.twitch.tv/ogn_lol","_blank")
    }

    render() {

        return (
            <div className={styles.box}>
                <div className={styles.team}>
                    <div className={styles.teamName}>
                        {this.props.left} vs {this.props.right}
                    </div>
                    <span className={styles.info}>
                        <div className={styles.info_status}>{this.props.gameTime}&nbsp;{this.props.status}</div>
                        <div onClick={this.openTwitch} className={styles.info_cursor}>
                            트위치에서 시청하기
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

class Arrows extends Component {
    render(){
        return(
            <div>
                <img
                    onClick={this.leftArrow}
                    src={require('./Img/arrow.png')}
                    className={styles.arrowLeft}/>
                <span className={styles.date}>{this.state.now}</span>
                <img
                    onClick={this.rightArrow}
                    src={require('./Img/arrow.png')}
                    className={styles.arrowRight}/>
            </div>
        );
    }
}

export default Info;
