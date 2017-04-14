import React, {Component} from 'react';
import styles from './Info.css';


class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.callAjax(5);
  }

  callAjax(date){
    $.ajax({
      url:'https://openlibrary.org/recentchanges.json?limit='+date,
      context:this,
      dataType:'json',
      type:'GET',
      success: function(result){
        var modTime = result[0].timestamp.split('T');
        this.setState({
          result:result[0].comment,
          result2:result[1].comment,
          kind:result[0].kind,
          kind2:result[1].kind,
          time:modTime[0]
        });
      }
    });
  }

  leftArrow(){
      alert('left');
  }

  rightArrow(){
      alert('right');
  }

  render() {
    var result = this.state.result;
    var result2 = this.state.result2;
    var kind = this.state.kind;
    var kind2 = this.state.kind2;
    var time = this.state.time;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          대회정보<br/>
          <img
            onClick={this.leftArrow}
            src={require('./Img/arrow.png')}
            className={styles.arrowLeft}/>
          <span className={styles.date}>{time}</span>
            <img
              onClick={this.rightArrow}
              src={require('./Img/arrow.png')}
              className={styles.arrowRight}/>
        </div>

        <div className={styles.box}>
          <div className={styles.team}>
            <div className={styles.teamName}>{kind}</div>
            <span className={styles.info}>
              <div>{result}</div>
            </span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.team}>
            <div className={styles.teamName}>{kind2}</div>
            <span className={styles.info}>
              <div>{result2}</div>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Info;
