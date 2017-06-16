import React from 'react';
import styles from './Ingame.css'

class Ingame extends React.Component {

    render(){

        return (
          <div className={styles.ingame_DivStyle}>
              <table className={styles.ingame_BlueDiv}>
                <thead><tr><td><span>Blue Team</span></td></tr></thead>
                <tbody>
                  <tr><td>1</td></tr>
                  <tr><td>2</td></tr>
                  <tr><td>3</td></tr>
                  <tr><td>4</td></tr>
                  <tr><td>5</td></tr>
                </tbody>
              </table>

              <div className={styles.ingame_CenterDiv}>
                <span>vs</span>
              </div>

            <table className={styles.ingame_RedDiv}>
              <thead><tr><td><span>Red Team</span></td></tr></thead>
              <tbody>
                <tr className={styles.ingame_tr}><td>1</td></tr>
                <tr><td>2</td></tr>
                <tr><td>3</td></tr>
                <tr><td>4</td></tr>
                <tr><td>5</td></tr>
              </tbody>
            </table>
          </div>
        );
    }
}
export default Ingame;
