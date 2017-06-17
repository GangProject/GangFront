import React from 'react';
import { Link } from 'react-router';
import styles from './Side.css';
import Common from '../../Common/js/Common.js';

class Side extends React.Component {
    
    render(){
        var param = "?userName="+Common.getUserName();
        var search = "/search";
        var rune = "/rune";
        var mastery = "/mastery";
        var mmr = "/mmr";
        var tier = "/tier";
        var ingame = "/ingame";

        return (
                <div className={styles.Sidediv}>
                  <table className={styles.tableStyle}>
                  <tbody>
                    <tr><td className={styles.Sidetd}><Link to={search+param}>최근경기기록</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+rune+param}>룬</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+mastery+param}>특성</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+mmr+param}>MMR</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to={search+tier+param}>시즌별 티어</Link></td></tr>
                    {/*<tr><td className={styles.Sidetd}><Link to={search+ingame+param}>인게임정보</Link></td></tr>*/}
                  </tbody>
                  </table>
                  <div className={styles.Best}>
                  {/*&nbsp;<h1>원딜</h1>*/}
                  </div>
                </div>

        );
    }
}

export default Side;
