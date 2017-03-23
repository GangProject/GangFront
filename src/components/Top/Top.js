import React from 'react';
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
    login() {
        alert('login');
    }
    render() {
        return (
            <div className={styles.top}>
                <div className={styles.topMenuLeft} onClick={this.logo}>GA.NG</div>
                <div className={styles.topMenu} onClick={this.login}>로그인</div>
                <div className={styles.topMenu} onClick={this.community}>커뮤니티</div>
                <div className={styles.topMenu} onClick={this.exSearch}>더 많은 검색</div>
            </div>
        );
    }
}

export default Top;
