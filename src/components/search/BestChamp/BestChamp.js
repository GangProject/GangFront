import React from 'react';
import styles from './BestChamp.css';
import { Link } from 'react-router';
import Common from '../../Common/js/Common.js';

class BestChamp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        info:{},
        resultCount:""
      };
    }

    componentDidMount() {
      this.getInfo();
    }

    getInfo() {
      return $.getJSON(Common.getCoreApi()+'api/summoner/info?name='+Common.getUserName())
        .then((data)=> {
            this.setState({
              info:data.leagues[0],
              resultCount:data.resultCount
            });
        })
        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });
    }

    render(){
      var userName = Common.getUserName();
      var param = "?userName="+userName;
      var search = "/search/champions";
      return (
              <div className={styles.divStyle}>
                <table className={styles.tableStyle}>
                  <tbody>
                    <tr>
                      <td>
                          {this.state.info.name}<br/>
                          {this.state.info.tier} {this.state.info.division} {this.state.info.leaguePoints}LP<br/>
                          승률 : {parseFloat(this.state.info.winingRate).toFixed(1)}%
                      </td>
                      <td> Best 5 </td>
                      <td>SS</td>
                      <td>A</td>
                      <td>A</td>
                      <td>A</td>
                      <td>B</td>
                      <td className={styles.best_more}><Link to={search+param}>더보기</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
        );
    }
}

export default BestChamp;
