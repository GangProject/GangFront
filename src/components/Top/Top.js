import React from 'react';
import { Link } from 'react-router';

import styles from './Top.css';

class Top extends React.Component {
    render() {
        return (
            <div className={styles.top}>
                <Link to="main"><div className={styles.topMenuLeft}>GA.NG</div></Link>
                <Link to="login"><div className={styles.topMenu}>로그인</div></Link>
                <Link to="community"><div className={styles.topMenu}>커뮤니티</div></Link>
                <Link to="searchMore"><div className={styles.topMenu}>더 많은 검색</div></Link>
                <Link to="feedback"><div className={styles.topMenu}>피드백</div></Link>
            </div>
        );
    }
}

export default Top;
