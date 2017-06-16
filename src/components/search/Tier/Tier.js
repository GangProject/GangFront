import React from 'react';
import styles from './Tier.css'
class Tier extends React.Component {

    render(){

      return (

        <div className={styles.divStyle}>
          <table className={styles.table1}>
            <tbody>
                <tr className={styles.tr1}>
                  <td>
                      <p>시즌1</p>
                  </td>
                  <td>
                      <p>시즌2</p>
                  </td>
                  <td>
                      <p>시즌3</p>
                  </td>
                  <td>
                      <p>시즌4</p>
                  </td>
                  <td>
                      <p>시즌5</p>
                  </td>
                  <td>
                      <p>시즌6</p>
                  </td>
                </tr>
                <tr className={styles.tr2}>
                  <td>
                      <img src={require('../img/tier_img/unranked.jpg')}/>
                      <h2>Unranked</h2>
                  </td>
                  <td>
                      <img src={require('../img/tier_img/unranked.jpg')}/>
                      <h2>Unranked</h2>
                  </td>
                  <td>
                      <img src={require('../img/tier_img/Silver_2.jpg')}/>
                      <h2>Silver 4</h2>
                  </td>
                  <td>
                      <img src={require('../img/tier_img/Silver_4.jpg')}/>
                      <h2>Silver 2</h2>
                  </td>
                  <td>
                      <img src={require('../img/tier_img/Silver_4.jpg')}/>
                      <h2>Silver 3</h2>
                  </td>
                  <td>
                      <img src={require('../img/tier_img/unranked.jpg')}/>
                      <h2>Gold 5</h2>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      );
    }
}

export default Tier;
