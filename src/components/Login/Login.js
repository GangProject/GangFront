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
          <input type="text" placeholder="아이디" className={styles.loginForm}/><br/>
          <input type="passwd" placeholder="비밀번호" className={styles.loginForm}/><br/><br/>
          <span onClick={this.back}>뒤로가기</span><br/>
        </div>
      </div>
    );
  }
}

export default Login;
