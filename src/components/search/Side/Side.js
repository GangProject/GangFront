import React from 'react';
import { Link } from 'react-router';
import styles from './Side.css';
import Common from '../../Common/js/Common.js';

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lane:[
              {line:""},
              {line:""}
            ]
        };
    }

     componentDidMount(){
       this.getLine()
     }

     getLine(){
       var api = Common.getCoreApi();
       var id = Common.getUserName();
         return $.getJSON(api+'api/recent/game/line?summonername='+id)
            .then((data)=> {
                this.setState({
                  lane:data
                });
             })
             .error(function() {
                 alert("서버로부터 데이터를 받아올 수 없습니다.");
             });
     }

    render(){
        var param = "?userName="+Common.getUserName();
        var search = "/search";
        var rune = "/rune";
        var mastery = "/mastery";
        var mmr = "/mmr";
        var tier = "/tier";
        var ingame = "/ingame";
        var line1 = this.state.lane[0];
        var line2 = this.state.lane[1];
        var line3 ;
        var url="../img/lane/";
        var lane="";
        var ff;
        if(line1.percent>line2.percent)
        {
           line3=line1;
        }else {
          line3=line2;
        }
        if(line3.line=="바텀")
        {
          lane="bottom";
        }
        else if(line3.line=="정글")
        {
          lane="jungle";
        }
        else if(line3.line=="탑")
        {
          lane="top";
        }
        else if(line3.line=="미드")
        {
          lane="mid";
        }
        else
        {
          lane=undefined;
        }

        console.log(line3);
        console.log(lane);
        console.log(url+lane);
        return (
                <div className={styles.Sidediv}>
                  <table className={styles.tableStyle}>
                  <tbody>
                    {/*<tr><td className={styles.SideRefresh} onClick={this.refresh}>전적갱신</td></tr>*/}
                    <tr><td className={styles.Sidetd}><Link to={search+param}>최근경기기록</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+rune+param}>룬</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+mastery+param}>특성</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+mmr+param}>MMR</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+tier+param}>시즌별 티어</Link></td></tr>
                    {/*<tr><td className={styles.Sidetd}><Link to={search+ingame+param}>인게임정보</Link></td></tr>*/}
                  </tbody>
                  </table>
                  <div className={styles.Best}>
                        {ff=(()=> {
                          if(lane==undefined)
                          {
                            return(<span></span>);
                          }
                          else {
                            return(<p><img src={require('../img/lane/'+lane+'.jpg')} className={styles.laneJpg}/><br/>{line3.line}</p>);
                          }
                        })()}
                  </div>
                </div>
        );
    }
}

export default Side;
