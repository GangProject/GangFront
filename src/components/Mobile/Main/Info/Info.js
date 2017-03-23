import React from 'react';
import styles from './Info.css';


class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    $.ajax({
      url:'https://openlibrary.org/recentchanges.json?limit=5',
      context:this,
      dataType:'json',
      type:'GET',
      success: function(result){
        console.log(result);
        var modTime = result[0].timestamp.split('T');
        this.setState({
          comment1:result[0].comment,
          comment2:result[1].comment,
          comment3:result[2].comment,
          comment4:result[3].comment,
          comment5:result[4].comment,
          kind:result[0].kind,
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
    var comment1 = this.state.comment1;
    var comment2 = this.state.comment2;
    var comment3 = this.state.comment3;
    var comment4 = this.state.comment4;
    var comment5 = this.state.comment5;
    var kind = this.state.kind;
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
              <div>{comment1}</div>
              <div>{comment2}</div>
              <div>{comment3}</div>
              <div>{comment4}</div>
              <div>{comment5}</div>
            </span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.team}>
            <div className={styles.teamName}>{kind}</div>
            <span className={styles.info}>
              <div>{comment1}</div>
              <div>{comment2}</div>
              <div>{comment3}</div>
              <div>{comment4}</div>
              <div>{comment5}</div>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Info;
