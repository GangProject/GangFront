import React, {Component} from 'react';
import Common from '../Common.js';
import styles from './CommunityRead.css';

class CommunityRead extends Component {
  componentDidMount() {

  }

  // GetList(page) {
  //   var addr = Common.getApi();
  //   return $.getJSON(addr+'api/article?currentPage='+page)
  //     .then((data) => {
  //       // console.log("GetList-data.list");
  //       // console.log(data.list[0]);
  //       Common.modDatetime(data.list); //Common.js에서 static메소드를 가져와서 날짜변환
  //       //this.modCommentnum(); //댓글갯수 []추가
  //       data.list.reverse(); //게시물을 제일 마지막부터 보기위해 reverse메소드로 리스트를 역순으로 변환..인데 성능문제?
  //       this.setState({ list: data.list });
  //     });
  // }

  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };
  }

  render() {
    var title = "제목입니다";
    var content = "내용이에여!";
    return(
      <div>
        <div className={styles.container}>
          <table className={styles.com_tab}>
            <thead>
              <td className={styles.com_title}>{title}</td>
            </thead>
            <tbody>
              <td className={styles.com_content}>{content}</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CommunityRead;
