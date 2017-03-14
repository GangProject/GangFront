import React from 'react';
import styles from './Info.css';

class Info extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    대회정보<br/>
                    <span className={styles.date}>2017.03.14</span>
                </div>
                <img onClick={this.search} src={require('../img/arrow.png')} className={styles.arrowLeft}/>
                <div className={styles.box}>
                    <div className={styles.team}>
                        <span className={styles.info}>
                            team1 vs team2<br/><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                            <span className={styles.detail}>boseok</span>
                            <span className={styles.detail}>boseok</span><br/>
                        </span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.team}>
                      <span className={styles.info}>
                          team1 vs team2<br/><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                          <span className={styles.detail}>boseok</span>
                          <span className={styles.detail}>boseok</span><br/>
                      </span>
                    </div>
                </div>
                <img onClick={this.search} src={require('../img/arrow.png')} className={styles.arrowRight}/>
            </div>
        );
    }
}

export default Info;
