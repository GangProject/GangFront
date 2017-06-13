import React from 'react';
import styles from './Ingame.css'
class Ingame extends React.Component {

    render(){

        return (
          <div className={styles.ingame_DivStyle}>
              <table className={styles.ingame_BlueDiv}>
                <thead><tr><span>Blue Team</span></tr></thead>
                <tbody>
                  <tr>1</tr>
                  <tr>2</tr>
                  <tr>3</tr>
                  <tr>4</tr>
                  <tr>5</tr>
                </tbody>
              </table>

              <div className={styles.ingame_CenterDiv}>
                <span>vs</span>
              </div>

            <table className={styles.ingame_RedDiv}>
              <thead><tr><span>Red Team</span></tr></thead>
              <tbody>
                <tr className={styles.ingame_tr}>1</tr>
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
export default Ingame;
