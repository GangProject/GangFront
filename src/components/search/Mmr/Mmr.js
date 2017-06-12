import React, {Component} from 'react';
import styles from './Mmr.css';

class Mmr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tier1:"Diamond",
            tier2:"5",
            mmr:"2031",
            msg:"평균 보다 조금 높습니다. 연승을 해서 MMR을 올려보세요!",
            avgMmr:"1994"
        };
    }

    apiCall() {
        var addr = Common.getApi();
        return $.getJSON(addr+'api/')
            .then((data) => {
                this.setState({
                    tier1: data.tier1,
                    tier2: data.tier2,
                    mmr:data.mmr,
                    msg:data.msg,
                    avgMmr:data.avgMmr
                });
            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }

    componentDidMount() {
        //this.apiCall();
    }

    render(){
        var tier1 = this.state.tier1;
        var tier2 = this.state.tier2;
        var mmr = this.state.mmr;
        var message = this.state.msg;
        var avgMmr = this.state.avgMmr;
        var imgSrc = '../Common/tier_img/'+tier1+'_'+tier2+'.png';
        console.log(imgSrc);
        return (
          <div>
            <table>
              <tr>
                <td>
                    <div className={styles.mmr_score}>MMR {mmr}</div>
                    <div>{tier1}&nbsp;{tier2}</div>
                    <div></div>
                    <div>{message}</div>
                </td>
              </tr>
              <tr>
                <td>
                    {tier1}&nbsp;{tier2} 0LP의 평균 점수는 {avgMmr} 입니다.
                </td>
              </tr>
            </table>
          </div>
        );
    }
}

export default Mmr;
