import React, {Component} from 'react';
import Common from '../Common.js';
import styles from './Community.css';

class Community extends Component {
  componentDidMount() {
    this.GetList(1);
  }

  GetList(page) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/article?currentPage='+page)
      .then((data) => {
        // console.log("GetList-data.list");
        // console.log(data.list[0]);
        Common.modDatetime(data.list); //Common.js에서 static메소드를 가져와서 날짜변환
        //this.modCommentnum(); //댓글갯수 []추가
        data.list.reverse(); //게시물을 제일 마지막부터 보기위해 reverse메소드로 리스트를 역순으로 변환..인데 성능문제?
        this.setState({ list: data.list });
      });
  }

  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };
  }

  modCommentnum(result){
    for(var i in result){
      if(result[i].commentNum!=0){
        var tmp = "[";
        tmp += result[i].commentNum;
        tmp += "]";
        //this.setState({commentNum:tmp});
        result[i].commentNum = tmp;
      } else {
        //this.setState({commentNum:null});
        result[i].commentNum = null;
      }
    }
  }

  render() {
    return(
      <div>
        <div className={styles.container}>
          <img src={require('./Img/write.png')} className={styles.writeBtn} onClick={this.write}/>
          <table className={styles.com_tab}>
            <thead>
                <td className={styles.num}>번호</td>
                <td className={styles.title}>제목</td>
                <td className={styles.writer}>작성자</td>
                <td className={styles.datetime}>작성일</td>
            </thead>
            <tbody>
              {this.state.list.map((list, i) => {
                return (<CommunityList num={list.id}
                                      title={list.title}
                                      commentNum={list.commentNum}
                                      writer={list.createdBy}
                                      datetime={list.modifiedAt.nano}
                                      key={i}/>);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class CommunityList extends React.Component {
  render(){
    return(
        <tr className={styles.listTr}>
          <td className={styles.numList}>{this.props.num}</td>
          <td className={styles.titleList}>
            {this.props.title} <span className={styles.commentNum}>{this.props.commentNum}</span>
          </td>
          <td>{this.props.writer}</td>
          <td>{this.props.datetime}</td>
        </tr>
    );
  }
}

export default Community;
