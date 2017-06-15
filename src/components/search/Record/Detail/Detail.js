import React from 'react';
import styles from './Detail.css'
class Detail extends React.Component {

    render(){

        return (
          <div className={styles.detail_DivStyle}>
              <table className={styles.detail_BlueDiv}>
                <thead><tr><span>Blue Team   승리</span></tr></thead>
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
                <tr>
                  <span>Red Team    패배</span>
                </tr>
                <tr>
                드래곤 : 1  타워 : 3  바론 : 0
                </tr>
              </thead>
              <tbody>
                <tr className={styles.detail_tr}>1</tr>
                <tr>2</tr>
                <tr>3</tr>
                <tr>4</tr>
                <tr>5</tr>
              </tbody>
            </table>
          </div>
        );
    }
}
export default Detail;
