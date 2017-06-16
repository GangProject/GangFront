import React, {Component} from 'react';
import styles from './Record.css'
import Common from '../../Common/js/Common.js';
import alertify from '../../../../node_modules/alertifyjs/build/alertify.min';
import '../../../../node_modules/alertifyjs/build/css/themes/default.min.css';
import '../../../../node_modules/alertifyjs/build/css/alertify.css';
import { Link } from 'react-router';

class Record extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordList:[],
            message:"로딩중입니다"
        };
    }
///////////////////////////////////////////API CALL /////////////////////////////////////////
    getGameEntity(userName) {
        var addr = Common.getCoreApi();
        return $.getJSON(addr+'api/recent/dbGame?name='+userName)
            .then((data) => {
                // alertify.alert('ready!');
                this.setState({
                    recordList:data,
                    message:""
                });
            })
            .error(function() {
                alert("서버로부터 데이터를 받아올 수 없습니다");
            });
    }

    componentDidMount() {
        this.getGameEntity(Common.getUserName());
    }

    render(){
        return (
                <div className={styles.divStyle}>
                  <table className={styles.tableStyle}>
                    <tbody>
                    <h1>{this.state.message}</h1>
                        {this.state.recordList.map((list, i) => {
                            return (<RecordList num={list.id}
                                               gameType={list.gameEntity.subType}
                                               beforeTime={list.gameEntity.playtime}
                                               win={list.gameEntity.win}
                                               playTime={list.gameEntity.durationTime}
                                               champName={list.gameEntity.champion}
                                               spell1={list.gameEntity.spell1}
                                               spell2={list.gameEntity.spell2}
                                               kda={list.gameEntity.kill+" / "+list.gameEntity.death+" / "+list.gameEntity.assist}
                                               avg={(list.gameEntity.kill+list.gameEntity.assist)/list.gameEntity.death}
                                               oncekill={list.gameEntity.rekill}
                                               lv={list.gameEntity.level}
                                               cs={list.gameEntity.cs}
                                               avgcs={(list.gameEntity.cs/list.gameEntity.durationTime.split("분")[0]).toFixed(1)}
                                               pink={list.gameEntity.pink}
                                               ward={list.gameEntity.ward}
                                               killinv={list.gameEntity.inkda.toFixed(0)}
                                               item0={list.gameEntity.item0}
                                               item1={list.gameEntity.item1}
                                               item2={list.gameEntity.item2}
                                               item3={list.gameEntity.item3}
                                               item4={list.gameEntity.item4}
                                               item5={list.gameEntity.item5}
                                               playerlist={list.playerEntity}
                                               key={i}/>
                                    );
                            })
                        }
                    </tbody>
                  </table>
                </div>
        );
    }
}

class RecordList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const champUrl = "img/champ/";
        const jpg = ".jpg";
        const champName =  champUrl + this.props.champName + jpg;

        const spellUrl = "img/spell/Summoner";
        const spell1 =  spellUrl + this.props.spell1+jpg;
        const spell2 =  spellUrl + this.props.spell2+jpg;

        var param = "?userName="+Common.getUserName();
        var search = "/search";
        var detail = "/detail";

        const itemUrl = "img/item/";

        var win = this.props.win;

        if(win==true){
            win="승리";
        } else {
            win="패배";
        }

        return (
            <tr className={styles.record_listTr}>
                <td>
                    <div className={styles.record_info}>
                        <span>{this.props.gameType}</span><br/>
                        <span>{this.props.beforeTime}</span><br/>
                        <span className={styles.record_result}>{win}</span><br/>
                        <span>{this.props.playTime}</span>
                    </div>
                </td>
                <td>
                    <span>
                        <img src={require("../"+champName)} className={styles.record_champIcon}/>
                    </span>
                </td>
                <td>
                    <span><img src={require("../"+spell1)} className={styles.record_spellIcon}/></span><br/>
                    <span><img src={require("../"+spell2)} className={styles.record_spellIcon}/></span>
                </td>
                <td>
                    <div>
                        <span className={styles.record_kda}>{this.props.kda}</span><br/>
                        <span className={styles.record_avgKda}>{this.props.avg.toFixed(2)}:1 평점</span><br/>
                        {(()=> {
                            if(this.props.oncekill===null){
                                return(
                                    <span></span>
                                );
                            } else {
                                return(
                                    <span className={styles.record_oncekill}>{this.props.oncekill}</span>
                                );
                            }
                        }
                        )()}
                    </div>
                </td>
                <td className={styles.record_info2}>
                    <span>레벨 {this.props.lv}<br/></span>
                    <span>{this.props.cs}({this.props.avgcs})CS<br/></span>
                    <span>핑와 {this.props.pink}개 구매<br/></span>
                    <span className={styles.record_killinv}>킬관여 {this.props.killinv}%</span>
                </td>
                <td>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item0+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item1+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item2+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                    <br/>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item3+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item4+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                    <span className={styles.record_itemlist}>
                        <img src={require("../"+itemUrl+this.props.item5+jpg)} className={styles.record_itemList_itemImg}/>&nbsp;
                    </span>
                </td>

                <td className={styles.record_playerlist}>
                    <div>
                        {this.props.playerlist.slice(0,this.props.playerlist.length/2).map((plist,i) => {
                            const playerChampUrl = "img/champ/"+plist.champname+".jpg";
                            return (
                                <div key={i}>
                                    <img src={require("../"+playerChampUrl)} className={styles.record_playerList_champImg}/>{plist.playername}
                                </div>
                            );

                        })
                        }
                    </div>
                </td>
                <td className={styles.record_playerlist2}>
                    <div>
                        {this.props.playerlist.slice(this.props.playerlist.length/2,this.props.playerlist.length).map((plist,i) => {
                            const playerChampUrl = "img/champ/"+plist.champname+".jpg";
                            return (
                                <div key={i}>
                                    <img src={require("../"+playerChampUrl)} className={styles.record_playerList_champImg}/>{plist.playername}
                                </div>
                            );

                        })
                        }
                    </div>
                </td>

                <td>
                    <Link to={search+detail+param}>더보기</Link>
                </td>
            </tr>


        );
    }
}

export default Record;
