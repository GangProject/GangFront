import React from 'react';
import styles from './Info.css';


class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:"",
      data2:"boseok"
    };
  }

  componentDidMount() {
    $.ajax({
      url:'https://openlibrary.org/recentchanges.json?limit=1',
      context:this,
      dataType:'json',
      type:'GET',
      success: function(result){
        this.setState({data:result[0].comment});
      }
    });
  }

  render() {
    var hello = this.state.data;
    var data = this.state.data2;
    var data2 = [
      {
        "when":"2 mins ago",
        "where":"boseok home",
        "desc":"created account"
      },
      {
        "when":"4 mins ago",
        "where":"boseokkkk home",
        "desc":"createddddd accountttt"
      }
    ];
    var rows = data2.map(function(row, index){
      return <div>
        <span>{row.when}</span>
        <span>{row.where}</span>
        <span>{row.desc}</span>
      </div>
    })
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          대회정보<br/>/{hello}/
        <div>data<br/>{data}</div>
        <div>data2<br/>{rows}</div>
          <span className={styles.date}>2017.03.14</span>
        </div>
        <img
          onClick={this.search}
          src={require('../img/arrow.png')}
          className={styles.arrowLeft}/>
        <div className={styles.box}>
          <div className={styles.team}>
            <span className={styles.info}>
              <div className={styles.teamName}>Team1&nbsp;&nbsp;vs&nbsp;&nbsp;Team2</div>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
            </span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.team}>
            <span className={styles.info}>
              <div className={styles.teamName}>Team1&nbsp;&nbsp;vs&nbsp;&nbsp;Team2</div>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
              <span className={styles.detail}>boseok</span>
              vs
              <span className={styles.detail}>boseok</span>
              <br/>
            </span>
          </div>
        </div>
        <img
          onClick={this.search}
          src={require('../img/arrow.png')}
          className={styles.arrowRight}/>
      </div>
    );
  }
}

export default Info;
