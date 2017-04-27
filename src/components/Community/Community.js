import React from 'react';
import styles from './Community.css';

class Community extends React.Component {

  back(){
    history.go(-1);
  }
  render() {
    return(
      <div>
        <div className={styles.container}>
          community
        </div>
      </div>
    );
  }
}

export default Community;
