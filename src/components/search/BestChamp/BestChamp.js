import React from 'react';
import styles from './BestChamp.css';
class BestChamp extends React.Component {

    render(){

        return (
                <div className={styles.divStyle}>
                  <table className={styles.tableStyle}>
                    <tbody>
                      <tr>
                        <td className={styles.firstTdStyle}>군대가야되젠장<br/>Gold 5<br/>24lp</td>
                        <td className={styles.tdStyle}>리신</td>
                        <td className={styles.tdStyle}>제드</td>
                        <td className={styles.tdStyle}>애쉬</td>
                        <td className={styles.tdStyle}>가렌</td>
                        <td className={styles.tdStyle}>베인</td>
                        <td className={styles.lastTdStyle}>더보기</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        );
    }
}

export default BestChamp;
