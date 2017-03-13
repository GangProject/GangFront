import React from 'react';
import styles from './Top.css';

class Top extends React.Component {
    hello() {
        alert('hello!');
    }
    render() {
        return (
            <div className={styles.top}>
                <div className={styles.topMenu} onClick={this.hello}>Login</div>
            </div>
        );
    }
}

export default Top;
