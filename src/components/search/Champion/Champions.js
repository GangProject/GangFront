import React from 'react';
import styles from './Champions.css';
class Champions extends React.Component {

    render(){

        return (
          <div className={styles.divStyle}>
            <table className={styles.tableStyle}>
            <thead>
              <tr>
                <td className={styles.tdStyle}></td>
                <td className={styles.tdStyle}>챔피언</td>
                <td className={styles.tdStyle}>승률</td>
                <td className={styles.tdStyle}>KDA</td>
                <td className={styles.tdStyle}>CS</td>
                <td className={styles.tdStyle}>GOLD</td>
                <td className={styles.tdStyle}>최대 킬</td>
                <td className={styles.tdStyle}>최대 데스</td>
                <td className={styles.tdStyle}>평균 딜량</td>
                <td className={styles.tdStyle}>더블 킬</td>
                <td className={styles.tdStyle}>트리플 킬</td>
                <td className={styles.tdStyle}>쿼드라 킬</td>
                <td className={styles.tdStyle}>펜타 킬</td>
                <td className={styles.tdStyle}>등급</td>
              </tr>

            </thead>
            <tbody>
              <tr>
                  <td className={styles.tdStyle}>1</td>
                  <td className={styles.tdStyle}>진</td>
                  <td className={styles.tdStyle}>18승9패<br/>66%</td>
                  <td className={styles.tdStyle}>8.8/4.8/9.7<br/>3.85</td>
                  <td className={styles.tdStyle}>199.2</td>
                  <td className={styles.tdStyle}>13,787</td>
                  <td className={styles.tdStyle}>19</td>
                  <td className={styles.tdStyle}>9</td>
                  <td className={styles.tdStyle}>25000</td>
                  <td className={styles.tdStyle}>26</td>
                  <td className={styles.tdStyle}>11</td>
                  <td className={styles.tdStyle}>3</td>
                  <td className={styles.tdStyle}>1</td>
                  <td className={styles.tdStyle}>SS</td>
              </tr>

              </tbody>
            </table>
          </div>
        );
    }
}

export default Champions;
