import React, {Component} from 'react';
import Common from '../../Common/js/Common.js';
import styles from './Info.css';
import Champions from "../../search/Champion/Champions";


class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamelist:[]
    };
  }

  componentDidMount() {
    this.getGameInfo();
  }

  getGameInfo(){
      var addr = Common.getApi();
      return $.getJSON(addr+'api/Home/gameInfo')
          .then((data) => {
              this.setState({
                  gamelist : data
              });
          });
  }

  leftArrow(){
      alert('left');
  }

  rightArrow(){
      alert('right');
  }

  render() {
    var leftTeam = this.state.leftTeam;
    var rightTeam = this.state.rightTeam;
    var status = this.state.status;
    var time = this.state.gameTime;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          대회정보<br/>
          <img
            onClick={this.leftArrow}
            src={require('./Img/arrow.png')}
            className={styles.arrowLeft}/>
          <span className={styles.date}>{time}</span>
            <img
              onClick={this.rightArrow}
              src={require('./Img/arrow.png')}
              className={styles.arrowRight}/>
        </div>
          {this.state.gamelist.map((list, i) => {
              return(
                  <ChampionshipInfo key={i}
                                    left={list.leftTeam}
                                    right={list.rightTeam}
                                    status={list.status}
                  />
              );
            })
          }


      </div>
    );
  }
}

class ChampionshipInfo extends Component {
  render(){
    return(
        <div className={styles.box}>
          <div className={styles.team}>
            <div className={styles.teamName}>{this.props.left} vs {this.props.right}</div>
            <span className={styles.info}>
              <div>{this.props.status}</div>
            </span>
          </div>
        </div>
    );
  }
}

export default Info;
