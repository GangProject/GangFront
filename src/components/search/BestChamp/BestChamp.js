import React from 'react';
import styles from './BestChamp.css';
import { Link } from 'react-router';

class BestChamp extends React.Component {

    render(){

        return (
                <div className={styles.divStyle}>
                  <table className={styles.tableStyle}>
                    <tbody>
                      <tr>
                        <td>군대가야되젠장<br/>Gold 5<br/>24lp</td>
                        <td> Best 5 </td>
                        <td>SS</td>
                        <td>A</td>
                        <td>A</td>
                        <td>A</td>
                        <td>B</td>
                        <td><Link to="/search/champions">더보기</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        );
    }
}

export default BestChamp;
