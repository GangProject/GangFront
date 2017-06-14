import React from 'react';
import { Link } from 'react-router';
import styles from './Side.css';

class Side extends React.Component {
    
    render(){

        return (
                <div className={styles.Sidediv}>
                  <table className={styles.tableStyle}>
                  <tbody>
                    <tr><td className={styles.Sidetd}><Link to="/search">최근경기기록</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to="/search/rune">룬</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to="/search/masterie">특성</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to="/search/mmr">MMR</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to="/search/tier">시즌별 티어</Link></td></tr>
                    <tr><td className={styles.Sidetd}><Link to="/search/ingame">인게임정보</Link></td></tr>
                  </tbody>
                  </table>
                  <div className={styles.Best}>
                  &nbsp;<h1>원딜</h1>
                  </div>
                </div>

        );
    }
}

export default Side;
