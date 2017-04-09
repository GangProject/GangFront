import React, {Component} from 'react';
import styles from './searchMore.css';

class searchMore extends Component {

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
