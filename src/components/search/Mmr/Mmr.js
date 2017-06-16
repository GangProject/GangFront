import React, {Component} from 'react';
import styles from './Mmr.css';
import Common from '../../Common/js/Common.js';

class Mmr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info:[],
            status:"",
            message:""
        };
    }
    componentDidMount() {
      var id = Common.getUserName();
      this.getMmr(id);
    }
    getMmr(id) {
        var addr = Common.getCoreApi();

        return $.getJSON(addr+'api/summoner/soloMmr?name='+id)
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

        var info = this.state.info;

        let tier = info.myTierEng;
        let division = info.myDivision+"";
        var imgUrl = 'img/tier_img/'+tier+'_'+division+'.jpg';
        console.log(this);
        console.log('1');
        return (

            <div className={styles.mmr_divStyle}>
                <div className={styles.mmr_div}>
                    <div className={styles.mmr_score}>MMR {info.predictMmr}</div>
                    <div className={styles.mmr_tier}>{info.predictTierEng} {info.predictDivision}</div>
                    <div className={styles.mmr_message}>
                      {(() => {
                        if(info.myMmr>info.predictMmr)
                        {
                          return(<p>평균보다 낮습니다.</p>);
                        }
                        else if(info.myMmr<info.predictMmr)
                        {
                          return(<p>평균보다 높습니다.</p>);
                        }
                        else {
                          return(<p>평균입니다.</p>);
                        }
                      })()}
                    </div>

                    <div className={styles.mmr_avgScore}>
                         {info.myTierEng} {info.myDivision} 의 평균 점수는<br/>
                         {info.myMmr}입니다.
                    </div>
                </div>
          </div>
        );
    }
}

export default Mmr;
