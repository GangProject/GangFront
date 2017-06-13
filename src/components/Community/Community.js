import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './Community.css';
import Common from '../Common/js/Common.js';

class Community extends Component {
  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };
  }

  getList(page) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/article?currentPage='+page)
      .then((data) => {
        Common.modDatetime(data.result.list); //Common.js에서 static메소드를 가져와서 날짜변환
        Common.modCommentCount(data.result.list); //댓글갯수 []추가
        //data.result.list.reverse(); //게시물을 제일 마지막부터 보기위해 reverse메소드로 리스트를 역순으로 변환..인데 성능문제?
          //api를 desc로 변경함에 따라 reverse메소드 삭제
        this.setState({
            list: data.result.list,
            currentPage:data.result.currentPage,
            totalCount:data.result.totalCount
        });
      })
      .error(function() {
        alert("서버로부터 데이터를 받아올 수 없습니다");
      });
  }

  componentDidMount() {
    this.getList(1);
  }

  render() {
    var pageList = [];
    var pageCount = Common.getPageCount(this.state.totalCount);
    for(var i=1; i<=pageCount; i++){
        pageList.push(i);
    }
    return(
      <div>
        <div className={styles.container}>
          <Link to="community/write">
              <img src={require('../Common/img/write.png')} className={styles.writeBtn}/>
          </Link>

          <table className={styles.com_tab}>
            <thead>
              <tr>
                <td className={styles.num}>번호</td>
                <td className={styles.title}>제목</td>
                <td className={styles.writer}>작성자</td>
                <td className={styles.datetime}>작성일</td>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((list, i) => {
                return (<CommunityList num={list.article.id}
                                      title={list.article.title}
                                      commentCount={list.commentCount}
                                      writer={list.article.createdBy}
                                      datetime={list.article.createdAt.nano}
                                      key={i}/>);
                })
              }
              <tr className={styles.pageCountTr}>
                  <td colSpan="4">
                      {
                          pageList.map((list, i) => {
                              if(this.state.currentPage==list){
                                  return (
                                    <span key={i} className={styles.currentPage}>
                                         {list}
                                    </span>
                                  );
                              } else {
                                  return (
                                    <span onClick={()=>this.getList(list)} key={i} className={styles.pageList}>
                                         {list}
                                    </span>
                                  );
                              }
                          })
                      }
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class CommunityList extends Component {
  render(){
    var link = "community/";
    return(
        <tr className={styles.listTr}>
          <td className={styles.numList}>{this.props.num}</td>
          <td className={styles.titleList}>
            <Link to={link+this.props.num}>{this.props.title}</Link>&nbsp;
            <span className={styles.commentNum}>{this.props.commentCount}</span>
          </td>
          <td>{this.props.writer}</td>
          <td>{this.props.datetime}</td>
        </tr>
    );
  }
}

export default Community;
