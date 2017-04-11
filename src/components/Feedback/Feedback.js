import React, {Component} from 'react';
import Common from '../Common.js';
import styles from './Feedback.css';

class Feedback extends Component {

  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };
  }

  componentDidMount() {
    this.GetList(1);
  }

  modDatetime(list){
    for(var i in list){
      var tmp = "";
      var year = list[i].createdAt.year;
      var month = list[i].createdAt.monthValue;
      var day = list[i].createdAt.dayOfMonth;
      tmp += year+"."+month + "." + day;
      list[i].createdAt.nano = tmp;
    }
  }

  GetList(page) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/feedBack?currentPage='+page)
      .then((data) => {
        // console.log("GetList-data.list");
        // console.log(data.list[0]);
        this.modDatetime(data.list); //Common.js에서 static메소드를 가져와서 날짜변환
        //this.modCommentnum(); //댓글갯수 []추가
        data.list.reverse(); //게시물을 제일 마지막부터 보기위해 reverse메소드로 리스트를 역순으로 변환..인데 성능문제?
        this.setState({ list: data.list });
      });
  }

  render() {
    return(
      <div>
        <div className={styles.container}>
          <input type="text" placeholder="닉네임" className={styles.anonymForm}/>
          <input type="password" placeholder="패스워드"  className={styles.anonymForm}/>
          <textarea placeholder="내용을 입력하세요" className={styles.anonymTextarea}/>
          <img src={require('./Img/write.png')} className={styles.submitBtn} onClick={this.write}/>
          <div className={styles.list}>
            {this.state.list.map((feed, i) => {
                        return (<FeedbackList writer={feed.name}
                                            datetime={feed.createdAt.nano}
                                            content={feed.content}
                                              key={i}/>);
                    })
            }
          </div>
        </div>
      </div>
    );
  }
}

class FeedbackList extends React.Component {
  render(){
    return(
      <div>
        <hr className={styles.f_hr}/>
        <table className={styles.tab}>
          <tbody>
          <tr>
            <td>{this.props.writer}</td><td>{this.props.datetime}</td>
          </tr>
          <tr>
            <td colSpan="2">
              { this.props.content.split('\n').map( line => {
                  return (<span>{line}<br/></span>)
                })
              }
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Feedback;
