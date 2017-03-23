import React from 'react';
import styles from './Login.css';

class Login extends React.Component {
  back(){
    history.go(-1);
  }
  render() {
    return(
      <div>
        <div className={styles.container}>
          로그인<br/>
        <span onClick={this.back}>뒤로가기</span>
        </div>
      </div>
    );
  }
}

export default Login;
