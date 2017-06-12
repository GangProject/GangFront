import React, {Component} from 'react';
import styles from './Masterie.css'

class Masterie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            masterieList:[
                {
                    masterieName : "천둥",
                    masterieDetail:"12/18/0",
                    //masterieContent:"표식 : 공격력 9개, 인장 : 방어력 9개, 문양 : 마법저항력 9개, 정수 : 공격속도 3개"
                },
                {
                    masterieName : "열광",
                    masterieDetail:"18/12/0",
                    //masterieContent:"표식 : 마법관통력 9개, 인장 : 방어력 9개, 문양 : 재사용 대기시간 9개, 정수 : 공격속도 3개"
                }
            ],
            currentMasterie:1
        };
    }

    masterieClick(i){
        this.setState({currentMasterie:i});
    }

    render(){
        return (
          <div className={styles.divStyle}>
            <div className={styles.masterie_div}>
                <table>
                    <tbody>
                        <tr>
                                {this.state.masterieList.map((list, i) => {
                                    if(this.state.currentMasterie==i+1){
                                        return (
                                            <td
                                                key={i} className={styles.masterie_currentMasterie}>
                                                <MasterieList
                                                    masterieName={list.masterieName}
                                                    n={i+1}
                                                    />
                                            </td>);
                                    } else {
                                        return (
                                            <td onClick={()=>this.masterieClick(i+1)}
                                                key={i} className={styles.masterie_masterieLists}>
                                                <MasterieList
                                                    masterieName={list.masterieName}
                                                    n={i+1}
                                                    />
                                            </td>);
                                    }
                                })
                                }
                        </tr>
                    </tbody>
                </table>
                <table className={styles.masterie_table2}>
                    <tbody>
                        <tr>
                            <td className={styles.masterie_content}>
                                <div>
                                    <span className={styles.masterie_cont_masterieName}>
                                        {this.state.masterieList[this.state.currentMasterie-1].masterieDetail}
                                    </span>
                                </div>
                                <div className={styles.masterie_cont_hr}>
                                    <br/>
                                    <hr/>
                                    <div className={styles.masterie_png}>
                                        {this.state.masterieList[this.state.currentMasterie-1].masterieContent}<br/>

                                        <img src={require('./masterie1.jpg')}/>
                                    </div>
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

class MasterieList extends Component {
    render(){
        return (
            <span>
                {this.props.n+". "+this.props.masterieName}
            </span>
        );
    }
}

export default Masterie;
