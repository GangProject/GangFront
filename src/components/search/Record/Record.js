import React from 'react';
import styles from './Record.css'
class Record extends React.Component {

    render(){

        return (
                <div className={styles.divStyle}>
                  <table className={styles.tableStyle}>
                  <tbody>
                    <tr><td className={styles.tdStyle}>1</td></tr>
                    <tr><td className={styles.tdStyle}>2</td></tr>
                    <tr><td className={styles.tdStyle}>3</td></tr>
                    <tr><td className={styles.tdStyle}>4</td></tr>
                    <tr><td className={styles.tdStyle}>5</td></tr>
                    <tr><td className={styles.tdStyle}>6</td></tr>
                    <tr><td className={styles.tdStyle}>7</td></tr>
                    <tr><td className={styles.tdStyle}>8</td></tr>
                    <tr><td className={styles.tdStyle}>9</td></tr>
                    <tr><td className={styles.tdStyle}>10</td></tr>

                    </tbody>
                  </table>
                </div>
        );
    }
}

export default Record;
