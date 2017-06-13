import React, {Component} from 'react';
import styles from './Record.css'

class Record extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordList:[
                {
                    id:1,
                    gameType:"자유랭",
                    beforeTime:"1일",
                    result:"승리",
                    playTime:"50분 20초",
                    champName:"Rumble",
                    spell1:"Teleport",
                    spell2:"Flash",
                    k:11,
                    d:1,
                    a:9,
                    oncekill:"더블킬",
                    lv:18,
                    cs:200,
                    avgcs:5.7,
                    pink:3,
                    killinv:66,
                    itemlist:[
                        {
                            itemid:3001,
                            name:"닌자의 신발"
                        },
                        {
                            itemid:3009,
                            name:"빙하의 장막"
                        },
                        {
                            itemid:3047,
                            name:"BF 대검"
                        },
                        {
                            itemid:3071,
                            name:"가면"
                        },
                    ],
                    playerlist:[
                        {
                            playerid:1,
                            name:"시기받기좋을시기",
                            champ:"Singed"
                        },
                        {
                            itemid:2,
                            name:"군대가야되젠장",
                            champ:"LeeSin"
                        },
                        {
                            itemid:3,
                            name:"류종하",
                            champ:"Ekko"
                        },
                        {
                            itemid:4,
                            name:"woncon",
                            champ:"Lucian"
                        },
                        {
                            itemid:5,
                            name:"bvest",
                            champ:"Nami"
                        }
                    ],
                    opplist:[
                        {
                            playerid:1,
                            name:"성철이",
                            champ:"Rumble"
                        },
                        {
                            itemid:2,
                            name:"양민학살용",
                            champ:"LeeSin"
                        },
                        {
                            itemid:3,
                            name:"보석",
                            champ:"Velkoz"
                        },
                        {
                            itemid:4,
                            name:"뚜우뿌뚜",
                            champ:"Graves"
                        },
                        {
                            itemid:5,
                            name:"maruYeah",
                            champ:"Nami"
                        }
                    ],
                },
                {
                    id:2,
                    gameType:"솔랭",
                    beforeTime:"11일",
                    result:"패배",
                    playTime:"26분 2초",
                    champName:"LeeSin",
                    spell1:"Smite",
                    spell2:"Flash",
                    k:19,
                    d:3,
                    a:18,
                    oncekill:"트리플킬",
                    lv:17,
                    cs:150,
                    avgcs:3.7,
                    pink:5,
                    killinv:80,
                    itemlist:[
                        {
                            itemid:1033,
                            name:"요우무"
                        },
                        {
                            itemid:1036,
                            name:"칠흑의 양날도끼"
                        },
                        {
                            itemid:1054,
                            name:"헤르메스의 발걸음"
                        }
                    ],
                    playerlist:[
                        {
                            playerid:1,
                            name:"시기받기좋을시기",
                            champ:"Singed"
                        },
                        {
                            itemid:2,
                            name:"군대가야되젠장",
                            champ:"LeeSin"
                        },
                        {
                            itemid:3,
                            name:"류종하",
                            champ:"Karma"
                        },
                        {
                            itemid:4,
                            name:"woncon",
                            champ:"Twitch"
                        },
                        {
                            itemid:5,
                            name:"bvest",
                            champ:"Velkoz"
                        }
                    ],
                    opplist:[
                        {
                            playerid:1,
                            name:"성철이",
                            champ:"Graves"
                        },
                        {
                            itemid:2,
                            name:"양민학살용",
                            champ:"Lucian"
                        },
                        {
                            itemid:3,
                            name:"보석",
                            champ:"Twitch"
                        },
                        {
                            itemid:4,
                            name:"뚜우뿌뚜",
                            champ:"Karma"
                        },
                        {
                            itemid:5,
                            name:"maruYeah",
                            champ:"Karma"
                        }
                    ],
                },
            ]
        };
    }

    render(){
        return (
                <div className={styles.divStyle}>
                  <table className={styles.tableStyle}>
                    <tbody>
                        {this.state.recordList.map((list, i) => {
                            return (<RecordList num={list.id}
                                               gameType={list.gameType}
                                               beforeTime={list.beforeTime}
                                               result={list.result}
                                               playTime={list.playTime}
                                               champName={list.champName}
                                               spell1={list.spell1}
                                               spell2={list.spell2}
                                               kda={list.k+" / "+list.d+" / "+list.a}
                                               avg={(list.k+list.a)/list.d}
                                               oncekill={list.oncekill}
                                               lv={list.lv}
                                               cs={list.cs}
                                               avgcs={list.avgcs}
                                               pink={list.pink}
                                               killinv={list.killinv}
                                               itemlist={list.itemlist}
                                               playerlist={list.playerlist}
                                               opplist={list.opplist}
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

    componentDidMount() {

    }

    render(){
        const champUrl = "img/champ/";
        const jpg = ".jpg";
        const champName =  champUrl + this.props.champName+jpg;

        const spellUrl = "img/spell/Summoner";
        const spell1 =  spellUrl + this.props.spell1+jpg;
        const spell2 =  spellUrl + this.props.spell2+jpg;


        if(this.props.itemlist.length!=6){
            for(var i=0; i<6; i++){
                if(this.props.itemlist[i]==null){
                    this.props.itemlist.push({
                        itemid:"non",
                        name:"아이템없음"
                    });
                }
            }
        }
        return (
            <tr className={styles.record_listTr}>
                <td>
                    <div className={styles.record_info}>
                        <span>{this.props.gameType}</span><br/>
                        <span>{this.props.beforeTime} 전</span><br/>
                        <span className={styles.record_result}>{this.props.result}</span><br/>
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
                        <span className={styles.record_oncekill}>{this.props.oncekill}</span>
                    </div>
                </td>
                <td className={styles.record_info2}>
                    <span>레벨 {this.props.lv}<br/></span>
                    <span>{this.props.cs}({this.props.avgcs.toFixed(1)})CS<br/></span>
                    <span>핑와 {this.props.pink}개 구매<br/></span>
                    <span className={styles.record_killinv}>킬관여 {this.props.killinv}%</span>
                </td>
                <td>
                    {this.props.itemlist.map((ilist,i) => {
                        const itemUrl = "img/item/";
                        const itemImg = itemUrl + ilist.itemid + ".jpg";
                        if(i==3){
                            return (
                                <span key={i}>
                                    <br/>
                                    <span className={styles.record_itemlist}>
                                        <img src={require("../"+itemImg)} className={styles.record_itemList_itemImg}/>&nbsp;
                                    </span>
                                </span>
                            );
                        } else {
                            return (<span className={styles.record_itemlist}
                                          key={i}>
                                        <img src={require("../"+itemImg)} className={styles.record_itemList_itemImg}/>&nbsp;
                                </span>
                            );
                        }

                    })
                    }
                </td>
                <td  className={styles.record_playerlist}>
                    <div>
                        {this.props.playerlist.map((plist,i) => {
                            const playerChampUrl = "img/champ/"+plist.champ+".jpg";
                                return (<div
                                              key={i}>
                                        <img src={require("../"+playerChampUrl)} className={styles.record_playerList_champImg}/>{plist.name}
                                    </div>
                                );
                        })
                        }
                    </div>
                </td>
                <td className={styles.record_playerlist}>
                    <div>
                        {this.props.opplist.map((plist,i) => {
                            const oppChampUrl = "img/champ/"+plist.champ+".jpg";
                            return (<div
                                         key={i}>
                                    <img src={require("../"+oppChampUrl)} className={styles.record_playerList_champImg}/>{plist.name}
                                </div>
                            );
                        })
                        }
                    </div>
                </td>
            </tr>
        );
    }
}

export default Record;
