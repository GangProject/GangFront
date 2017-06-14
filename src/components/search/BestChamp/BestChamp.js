import React from 'react';
import styles from './BestChamp.css';
import { Link } from 'react-router';

class BestChamp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        championList:[],
        resultCount:""
      };
    }
    componentDidMount() {
      this.getChampion("Bvest");
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
                    <tbody>
                      <tr>
                        <td>군대가야되젠장<br/>Gold 5<br/>24lp</td>
                        <td> Best 5 </td>
                        <td>SS</td>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        <td>B</td>
                        <td><Link to="/search/champions">더보기</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        );
    }
}

export default BestChamp;
