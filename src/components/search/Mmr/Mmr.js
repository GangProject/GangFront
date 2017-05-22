import React, {Component} from 'react';
import styles from './Mmr.css';

class Mmr extends React.Component {

    render(){

        return (

          <div>
            <table>
              <tr>
                <td>
                  2,031	MMR	Diamond 5
                  <img src={require('../../Common/img/write.png')} className={styles.tierIcon} />
                  평균 보다 조금 높습니다. 연승을 해서 MMR을 올려보세요!
                </td>
              </tr>
              <tr>
                <td>
                  Diamond 5 0LP의 평균 점수는 1,994 입니다.
                </td>
              </tr>
            </table>
          </div>
        );
    }
}

export default Mmr;
