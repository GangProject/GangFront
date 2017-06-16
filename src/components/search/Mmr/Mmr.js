import React, {Component} from 'react';
import styles from './Mmr.css';
import Common from '../../Common/js/Common.js';

class Mmr extends Component {
    constructor(props) {

        super(props);
        this.getMmr();
        this.state = {
            info:[],
            status:"",
            message:""
        };
    }

    componentDidMount() {

    }

    getMmr() {
        var addr = Common.getCoreApi();

        return $.getJSON(addr+'api/summoner/soloMmr?name='+Common.getUserName())
            .then((data) => {

                this.setState({
                    info:data.dto,
                    status:data.status,
                    message:data.message
                });

            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }


    render(){
        const imgUrl = "img/tier_img/";
        const jpg = ".jpg";
        const lowerTierEng = this.state.info.myTierEng;
        const mmrImg =  imgUrl + lowerTierEng +"_"+this.state.info.myDivision + jpg;
        console.log(mmrImg);
        return (
            <div className={styles.mmr_divStyle}>
                <div className={styles.mmr_div}>
                    <div className={styles.mmr_score}>MMR {this.state.info.predictMmr}</div>
                    <div className={styles.mmr_tier}>{this.state.info.myTierEng} {this.state.info.myDivision}</div>
                    <div className={styles.mmr_message}>
                      {(() => {
                        if(this.state.info.myMmr>this.state.info.predictMmr)
                        {
                          return(<p>평균보다 낮습니다.</p>);
                        }
                        else if(this.state.info.myMmr<this.state.info.predictMmr)
                        {
                          return(<p>평균보다 높습니다.</p>);
                        }
                        else {
                          return(<p>평균입니다.</p>);
                        }
                      })()}
                    </div>
                    <div className={styles.mmr_avgScore}>
                        <img src={require('../'+mmrImg)}/><br/>
                         {this.state.info.myTierEng} {this.state.info.myDivision} 의 평균 점수는<br/>
                         {this.state.info.myMmr}입니다.
                    </div>
                </div>
          </div>
        );
    }
}

export default Mmr;
