import React, {Component} from 'react';
import Common from '../Common/js/Common.js';
import styles from './CommunityWrite.css';

class CommunityWrite extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <div className={styles.container}>
          <input type="text" placeholder="제목" className={styles.anonymForm}/>
          <textarea placeholder="내용을 입력하세요" className={styles.anonymTextarea}/>
          <img src={require('../Common/Img/write.png')} className={styles.submitBtn} onClick={this.write}/>
        </div>
      </div>
    );
  }

}

export default CommunityWrite;
