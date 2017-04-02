import React from 'react';
import { Link } from 'react-router';

import styles from './Title.css';

class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: "GA.NG",
            data:""
        };
    }

    componentDidMount() {
      this.callAjax();
    }

    callAjax(){
      $.ajax({
        url:'http://13.124.33.113:8080/Gang/api/hello',
        context:this,
        dataType:'json',
        type:'GET',
        success: function(result){
          console.log("result:");
          console.log(result);
          console.log("result.data:");
          console.log(result.data);

          this.setState({
            data:result.data
          });
        },
        error: function(request, status, error) {
          this.setState({
            data:"데이터를 가져올 수 없습니다."
          });
          console.log('error in Gang/api/hello');
          console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
      });
    }

    search(){
      alert('hello');
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                  <div className={styles.header}>{this.state.header}</div>
                  <div>GANG Server Hello api call : {this.state.data}</div>
                  <input type="text" placeholder="소환사 이름" className={styles.searchForm}/>
                  <Link to="search"><img src={require('./Img/search.png')} className={styles.searchBtn}/></Link>
                </div>
            </div>
        );
    }
}

export default Title;
