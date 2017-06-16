import React, {Component} from 'react';
import styles from './Mastery.css'
import Common from '../../Common/js/Common.js';

class Mastery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            masteryList:[],
            currentMastery:1,
            message:"잠시 기다려주세요!"
        };
    }

    getMastery() {
        return $.getJSON(Common.getCoreApi()+'api/mastery/summoner?SummonerName='+Common.getUserName())
            .then((data) => {
            console.log(data);
                this.setState({
                    masteryList:data,
                });
            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }

    masteryClick(i){
        this.setState({currentMastery:i});
    }

    componentDidMount() {
        this.getMastery();
    }

    render(){
        return (
          <div className={styles.divStyle}>
                  {this.state.masteryList.map((list, i) => {
                      if(this.state.currentMastery==i+1){
                          return (
                              <div key={i} className={styles.row}>
                                <div className={styles.col_20_current}>
                                  {i+1+". "+list.name}
                                </div>
                                <div className={styles.col_80}>
                                    <div>{list.pointMastery}</div>
                                    <div>{this.state.masteryList[this.state.currentMastery-1].ferocity.number}/
                                        {this.state.masteryList[this.state.currentMastery-1].deceit.number}/
                                        {this.state.masteryList[this.state.currentMastery-1].resolution.number}
                                    </div>
                                </div>
                              </div>);
                      } else {
                          return (
                              <div key={i} className={styles.row}>
                                <div onClick={()=>this.masteryClick(i+1)}
                                  key={i} className={styles.col_20}>
                                  {i+1+". "+list.name}
                                </div>
                              </div>);
                      }
                  })
                  }
          </div>
        );

    }
}

export default Mastery;
