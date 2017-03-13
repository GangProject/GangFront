import React from 'react';
import styles from './Info.css';

class Info extends React.Component {
    render() {
        return (
          <div className={styles.container}>
            <center>
              대회정보<br/>
              2017.03.14<br/>
            </center>
          </div>
        );
    }
}

export default Info;
