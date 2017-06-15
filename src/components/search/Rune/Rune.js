import React, {Component} from 'react';
import styles from './Rune.css'

class Rune extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runeList:[
                {
                    runeName : "리신",
                    runeDetail:"공격력 +8.5  방어력 +9  마법저항력 +13  공격 속도 % +13.5%",
                    runeContent:"표식 : 공격력 9개, 인장 : 방어력 9개, 문양 : 마법저항력 9개, 정수 : 공격속도 3개"
                },
                {
                    runeName : "엘리스",
                    runeDetail:"마법관통력 +6.8  방어력 +9  재사용 대기시간 % -7.5%  공격 속도 % +13.5%",
                    runeContent:"표식 : 마법관통력 9개, 인장 : 방어력 9개, 문양 : 재사용 대기시간 9개, 정수 : 공격속도 3개"
                }
                ,
                {
                    runeName : "엘리스",
                    runeDetail:"마법관통력 +6.8  방어력 +9  재사용 대기시간 % -7.5%  공격 속도 % +13.5%",
                    runeContent:"표식 : 마법관통력 9개, 인장 : 방어력 9개, 문양 : 재사용 대기시간 9개, 정수 : 공격속도 3개"
                }
            ],
            currentRune:1
        };
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
                                        {this.state.runeList[this.state.currentRune-1].runeDetail}
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
