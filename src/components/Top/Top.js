import React from 'react';
import { Link } from 'react-router';

import styles from './Top.css';

class Top extends React.Component {
    logo() {
        alert('logo');
    }
    exSearch() {
        alert('확장검색');
    }
    community() {
        alert('커뮤니티');
    }
    
    render() {
        return (
            <div className={styles.top}>
                <div className={styles.topMenuLeft} onClick={this.logo}>GA.NG</div>
                <div className={styles.topMenu}><Link to="login">로그인</Link></div>
                <div className={styles.topMenu} onClick={this.community}>커뮤니티</div>
                <div className={styles.topMenu} onClick={this.exSearch}>더 많은 검색</div>
            </div>
        );
    }
}

export default Top;
