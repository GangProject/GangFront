import React, {Component} from 'react';
import styles from './Mmr.css';

class Mmr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tier1:"Diamond",
            tier2:"5",
            mmr:"2031",
            msg1:"평균 보다 조금 높습니다.",
            msg2:"연승을 해서 MMR을 올려보세요!",
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
        var message1 = this.state.msg1;
        var message2 = this.state.msg2;
        var avgMmr = this.state.avgMmr;
        var imgSrc = '../tier_img/'+tier1+'_'+tier2+'.png';
        console.log(imgSrc);
        return (
            <div className={styles.mmr_divStyle}>
                <div className={styles.mmr_div}>
                    <div className={styles.mmr_score}>MMR {mmr}</div>
                    <div className={styles.mmr_tier}>{tier1}&nbsp;{tier2}</div>
                    <div className={styles.mmr_message}>{message1}<br/>{message2}</div>
                    <div><img src={require('../tier_img/diamond_5.png')} className={styles.mmr_tier_img}/></div>
                    <div className={styles.mmr_avgScore}>
                        {tier1}&nbsp;{tier2} 0LP의 평균 점수는<br/>
                        {avgMmr} 입니다.
                    </div>
                </div>
          </div>
        );
    }
}

export default Mmr;
