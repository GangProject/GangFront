import React, {Component} from 'react';
import Common from '../../Common/js/Common.js';
import styles from './Info.css';

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
                                              gameTime={list.gameTime}
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
                        <div>{this.props.status}</div>
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
