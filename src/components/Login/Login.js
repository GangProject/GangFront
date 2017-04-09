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
          <input type="passwd" placeholder="비밀번호" className={styles.loginForm}/><br/>
          <button className={styles.loginBtn}>로그인</button><br/>
          <button className={styles.loginBtn}>페이스북으로 로그인</button><br/>
          <button className={styles.loginBtn}>네이버로 로그인</button><br/>
          <button className={styles.loginBtn}>구글로 로그인</button><br/>
        </div>
      </div>
    );
  }
}

export default Login;
