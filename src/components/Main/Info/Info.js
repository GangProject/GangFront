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

    openTwitch(){
        window.open("https://www.twitch.tv/ogn_lol","_blank")
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
        var left1 = "";
        var right1 = "";
        var status1 = "";
        var time1 = "";
        var left2 = "";
        var right2 = "";
        var status2 = "";
        var time2 = "";
        return (
            <div className={styles.foot}>
                <div className={styles.footMenu}>
                    <div className={styles.info_title}>대회정보</div>
                    <span>
                        {(()=> {
                            if(this.state.gamelist.length!=0){
                                if(this.state.gamelist[0].length!=0) {
                                    left1 = this.state.gamelist[0].leftTeam;
                                    right1 = this.state.gamelist[0].rightTeam;
                                    status1 = this.state.gamelist[0].status;
                                    if(this.state.gamelist[0].time!=""){
                                        time1 = this.state.gamelist[0].time+" ";
                                    }
                                }
                                if(this.state.gamelist[1].length!=0){
                                    left2 = this.state.gamelist[1].leftTeam;
                                    right2 = this.state.gamelist[1].rightTeam;
                                    status2 = this.state.gamelist[1].status;
                                    if(this.state.gamelist[1].time!=""){
                                        time2 = this.state.gamelist[1].time+" ";
                                    }
                                }
                            }
                        }
                        )()}
                        {message}<span className={styles.info_blue}>{left1} </span>
                        vs <span className={styles.info_red}>{right1} </span>({time1}{status1}),&nbsp;
                        <span className={styles.info_blue}>{left2} </span>
                        vs <span className={styles.info_red}>{right2} </span>({time2}{status2})
                        </span>
                    <br/>
                    <span onClick={this.openTwitch} className={styles.info_cursor}>트위치에서 시청하기</span>
                </div>

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


    render() {

        return (
            <div className={styles.box}>
                <div className={styles.team}>
                    <div className={styles.teamName}>
                        {this.props.left} vs {this.props.right}
                    </div>
                    <span className={styles.info}>
                        <div className={styles.info_status}>{this.props.gameTime}&nbsp;{this.props.status}</div>
                        <div >
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
