import React from 'react';
import styles from './Champions.css';
import Common from '../../Common/js/Common.js';

class Champions extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        championList:[],
        resultCount:""
      };
    }
    componentDidMount() {
      var id = Common.getUserName();
      this.getChampion(id);
    }
    getChampion(id) {
      var addr = Common.getCoreApi();

      return $.getJSON(addr+'api/rankedStats/info?name='+id)
        .then((data)=> {
          console.log(data);

            this.setState({
              championList:data.stats,
              resultCount:data.resultCount

            });
            console.log(this.state.championList);
        })
        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });
    }
    render(){
        return (
          <div className={styles.divStyle}>
            <table className={styles.tableStyle}>
            <thead className={styles.theadStyle}>
              <tr>
                <td className={styles.tdStyle}></td>
                <td className={styles.tdStyle}>챔피언</td>
                <td className={styles.tdStyle}>승률</td>
                <td className={styles.tdStyle}>KDA</td>
                <td className={styles.tdStyle}>CS</td>
                <td className={styles.tdStyle}>GOLD</td>
                <td className={styles.tdStyle}>최대 킬</td>
                <td className={styles.tdStyle}>최대 데스</td>
                <td className={styles.tdStyle}>평균 딜량</td>
                <td className={styles.tdStyle}>더블 킬</td>
                <td className={styles.tdStyle}>트리플 킬</td>
                <td className={styles.tdStyle}>쿼드라 킬</td>
                <td className={styles.tdStyle}>펜타 킬</td>
                <td className={styles.tdStyle}>등급</td>
              </tr>
            </thead>
            <tbody>
              {this.state.championList.map((list,i)=> {
                  return (
                    <ChampionsList key={i}
                                   num={i+1}
                                   avgAssist={list.avgAssist}
                                   avgCs={list.avgCs}
                                   win={list.win+"승"}
                                   lost={list.lost+"패"}
                                   avgDamageDealt= {list.avgDamageDealt.toFixed(0)}
                                   avgDeath= {list.avgDeath}
                                   avgGoldEarned= {list.avgGoldEarned.toFixed(0)}
                                   avgKill= {list.avgKill}
                                   id= {list.id}
                                   kda= {"KDA "+list.kda}
                                   name={list.name}
                                   played= {list.played}
                                   tier={list.tier}
                                   totalDoubleKills= {list.totalDoubleKills}
                                   totalMaxChampionsKilled= {list.totalMaxChampionsKilled}
                                   totalMaxNumDeaths= {list.totalMaxNumDeaths}
                                   totalPentaKills= {list.totalPentaKills}
                                   totalQuadraKills= {list.totalQuadraKills}
                                   totalTripleKills= {list.totalTripleKills}
                                   winningRate= {list.winningRate+"%"}
                    />
                  );
                })
              }
            </tbody>
            </table>
          </div>
        );
    }
}
class ChampionsList extends React.Component {
  render() {
    return (
        <tr>
            <td className={styles.tdStyle}>{this.props.num}</td>
            <td className={styles.tdStyle}>{this.props.name}</td>
            <td className={styles.tdStyle}>{this.props.win} {this.props.lost}<br/>{this.props.winningRate}</td>
            <td className={styles.tdStyle}>{this.props.avgKill}/{this.props.avgDeath}/{this.props.avgAssist}<br/>{this.props.kda}</td>
            <td className={styles.tdStyle}>{this.props.avgCs}</td>
            <td className={styles.tdStyle}>{this.props.avgGoldEarned}</td>
            <td className={styles.tdStyle}>{this.props.totalMaxChampionsKilled}</td>
            <td className={styles.tdStyle}>{this.props.totalMaxNumDeaths}</td>
            <td className={styles.tdStyle}>{this.props.avgDamageDealt}</td>
            <td className={styles.tdStyle}>{this.props.totalDoubleKills}</td>
            <td className={styles.tdStyle}>{this.props.totalTripleKills}</td>
            <td className={styles.tdStyle}>{this.props.totalQuadraKills}</td>
            <td className={styles.tdStyle}>{this.props.totalPentaKills}</td>
            <td className={styles.tdStyle}>{this.props.tier}</td>
        </tr>
    );
  }

}
export default Champions;
