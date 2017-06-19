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
      var id = Common.getUserName();
      this.getRune(id);
    }
    getRune(id) {
      var addr = Common.getCoreApi();

      return $.getJSON(addr+'api/rune/summonerName?summonername='+id)
        .then((data)=> {

            this.setState({
              runeList:data
            });
            console.log(this.state.runeList);
            console.log(this.state.runeList[0+1]);
            console.log(this.state.runeList[1].name);
            console.log(this.state.runeList[1].rune.black[0].name);
        })
        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });
    }
    runeClick(i){
        this.setState({currentRune:i});
    }

    render(){
        return (
          <div className={styles.divStyle}>
            <div className={styles.rune_div}>
            <table>
                <tbody>
                    <tr>
                            {this.state.runeList.map((list, i) => {
                                if(i==0)
                                {
                                  return;
                                }
                                if(this.state.currentRune==i){
                                    return (
                                        <td
                                            key={i} className={styles.rune_currentRune}>
                                            <RuneList
                                                runeName={list.name}
                                                n={i}
                                                />
                                        </td>);
                                } else {
                                    return (
                                        <td onClick={()=>this.runeClick(i)}
                                            key={i} className={styles.rune_runeLists}>
                                            <RuneList
                                                runeName={list.name}
                                                n={i}
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
