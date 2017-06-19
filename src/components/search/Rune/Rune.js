import React, {Component} from 'react';
import styles from './Rune.css'
import Common from '../../Common/js/Common.js';

class Rune extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runeList:[],
            currentRune:1
        };

    }
    componentDidMount() {
        this.getRune();
    }
    getRune() {
      var addr = Common.getCoreApi();
      var id = Common.getUserName();
      return $.getJSON(addr+'api/rune/summonerName?summonername='+id)
        .then((data)=> {
          console.log(data[0]);
          console.log(data);
            this.setState({
              runeList:data
            });
        })
        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });
    }
    runeClick(i){
        this.setState({currentRune:i});
    }

    render(){
        var count = false;

        return (

          <div className={styles.divStyle}>
            <div className={styles.rune_div}>
            <table>
                <tbody>
                    <tr>


                          {this.state.runeList.map((list, i) => {
                            console.log(list.name);
                                    if(this.state.currentRune==i+1){
                                        return (
                                            <td
                                                key={i} className={styles.rune_currentRune}>
                                                <RuneList
                                                    runeName={list.runeName}
                                                    n={i+1}
                                                    />
                                            </td>);
                                    } else {
                                        return (
                                            <td onClick={()=>this.runeClick(i+1)}
                                                key={i} className={styles.rune_runeLists}>
                                                <RuneList
                                                    runeName={list.runeName}
                                                    n={i+1}
                                                    />
                                            </td>);
                                    }
                                })
                            }

                    </tr>
                </tbody>
            </table>
            <table className={styles.rune_table2}>
                <tbody>
                    <tr>
                        <td className={styles.rune_content}>

                            <div className={styles.rune_cont_hr}>
                                <hr/>
                                <div className={styles.rune_png}>
                                    표식<br/>
                                    마법관통력 1.3 x 9
                                </div>
                                <hr/>
                                <div className={styles.rune_png}>
                                    인장<br/>
                                    방어력 1 x 9
                                </div>
                                <hr/>
                                <div className={styles.rune_png}>
                                    문양<br/>
                                    재사용 대기 시간 1 x 9
                                </div>
                                <hr/>
                                <div className={styles.rune_png}>
                                    정수<br/>
                                    주문력 1 x 3
                                </div>
                                <hr/>
                            </div>
                            <div>
                                <span className={styles.rune_cont_runeName}>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
          </div>
        );

    }
}

class RuneList extends Component {
    render(){
        return (
            <span>
                {this.props.n+". "+this.props.runeName}
            </span>
        );
    }
}

export default Rune;
