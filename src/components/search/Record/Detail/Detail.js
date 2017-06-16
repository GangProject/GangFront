import React from 'react';
import styles from './Detail.css'
class Detail extends React.Component {

    render(){

        return (
          <div className={styles.detail_DivStyle}>
              <table className={styles.detail_BlueDiv}>
                <thead>
                  <tr>
                    <span>Blue Team    승리</span>
                  </tr>
                  <tr>
                    드래곤 : 4  타워 : 9  바론 : 2
                  </tr>
                  <hr/>
                </thead>
                <tbody>
                  <tr>12</tr>
                  <tr>22</tr>
                  <tr>32</tr>
                  <tr>42</tr>
                  <tr>52</tr>
                </tbody>
              </table>

              <div className={styles.detail_CenterDiv}>
                <span>vs</span>
              </div>

            <table className={styles.detail_RedDiv}>
              <thead>
              <div>
                <tr className={styles.detail_thead_tr}>
                  Red Team    패배
                  <br/>
                  드래곤 : 1  타워 : 3  바론 : 0
                  <hr/>
                </tr>
                </div>
              </thead>
              <tbody>
              <div>
                <tr className={styles.detail_tr}>
                  <td>champion</td>
                  <td>name</td>
                  <td>spell1<br/>spell2</td>
                  <td>mastery</td>
                  <td>i0 i1 i2 <br/>i3 i4 i5</td>
                  <td>i6</td>
                  <td>kill/death/assist<br/>kda</td>
                  <td>cs</td>
                </tr>
                <tr className={styles.detail_tr}>
                  <td>champion</td>
                  <td>name</td>
                  <td>spell1<br/>spell2</td>
                  <td>mastery</td>
                  <td>i0 i1 i2 <br/>i3 i4 i5</td>
                  <td>i6</td>
                  <td>kill/death/assist<br/>kda</td>
                  <td>cs</td>
                </tr>
                <tr className={styles.detail_tr}>
                  <td>champion</td>
                  <td>name</td>
                  <td>spell1<br/>spell2</td>
                  <td>mastery</td>
                  <td>i0 i1 i2 <br/>i3 i4 i5</td>
                  <td>i6</td>
                  <td>kill/death/assist<br/>kda</td>
                  <td>cs</td>
                </tr>
                <tr className={styles.detail_tr}>
                  <td>champion</td>
                  <td>name</td>
                  <td>spell1<br/>spell2</td>
                  <td>mastery</td>
                  <td>i0 i1 i2 <br/>i3 i4 i5</td>
                  <td>i6</td>
                  <td>kill/death/assist<br/>kda</td>
                  <td>cs</td>
                </tr>
                <tr className={styles.detail_tr}>
                  <td>champion</td>
                  <td>name</td>
                  <td>spell1<br/>spell2</td>
                  <td>mastery</td>
                  <td>i0 i1 i2 <br/>i3 i4 i5</td>
                  <td>i6</td>
                  <td>kill/death/assist<br/>kda</td>
                  <td>cs</td>
                </tr>
                </div>
              </tbody>
            </table>
          </div>
        );
    }
}
export default Detail;
