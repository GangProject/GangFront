import React from 'react';
import styles from './searchMore.css';

class searchMore extends React.Component {

  back(){
    history.go(-1);
  }
  render() {
    return(
      <div>
        <div className={styles.container}>
          searchMore
        </div>
      </div>
    );
  }
}

export default searchMore;
