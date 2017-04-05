import React from 'react';
import styles from './Feedback.css';

class Feedback extends React.Component {

  back(){
    history.go(-1);
  }

  render() {
    return(
      <div>
        <div className={styles.container}>
          <span className={styles.nickname}>닉네임<br/></span>
          <textarea/><img src={require('./Img/search.png')} className={styles.submitBtn}/>
          <div className={styles.tab}>
            <table>
              <tr>
                <td>보석</td><td>16.04.05</td>
              </tr>
              <tr>
                <td colSpan="2">비온당</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
