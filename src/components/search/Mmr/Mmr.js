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
              console.log(data);
                this.setState({
                    info:data.dto,
                    status:data.status,
                    message:data.message
                });
                console.log(this.state.info);
            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }


    render(){

        var info = this.state.info;



        return (
            <div className={styles.mmr_divStyle}>
                <div className={styles.mmr_div}>
                    <div className={styles.mmr_score}>MMR {info.mmr}</div>
                    <div className={styles.mmr_tier}>{info.tier}</div>
                    <div className={styles.mmr_message}><br/></div>
                    <div></div>
                    <div className={styles.mmr_avgScore}>
                         {info.tier} 의 평균 점수는<br/>
                         입니다.
                    </div>
                </div>
          </div>
        );
    }
}

export default Mmr;
