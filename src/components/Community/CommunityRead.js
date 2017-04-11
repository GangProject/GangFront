import React, {Component} from 'react';
import Common from '../Common/js/Common.js';
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
      console.log("게시물번호");
      console.log(this.props.params.splat);
      console.log(this.props);
      this.state = {
          list:[]
      };
  }

  render() {
    var title = "제목입니다";
    var content = "내용이에여!";
    var addr = Common.getDomain()+"community/"+this.props.params.splat;
    console.log("domain");
    console.log(addr);
    return(
      <div>
        <div className={styles.container}>
          <table className={styles.comr_tab}>
            <thead>
              <tr>
                <img src={require('../Common/img/back.png')} className={styles.backBtn} onClick={Common.back}/>
                <img src={require('../Common/img/write.png')} className={styles.writeBtn} onClick={Common.back}/>
              </tr>
              <tr>
                <td className={styles.comr_title}>{title}</td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className={styles.comr_content}>
                  <div>{addr}</div>
                  {content}
                </td>
              </tr>
              <tr>
                <td className={styles.comr_comm}>댓글 num</td>
              </tr>
              <tr>
                <td className={styles.comr_comment}>
                  <span className={styles.comr_comment_writer}>boseok</span>
                  <span className={styles.comr_comment_datetime}>2017.04.12</span><br/>
                  <span className={styles.comr_comment_content}>안녕하세여!</span>
                </td>
              </tr>
              <tr>
                <td className={styles.comr_write_comment}>
                  <textarea placeholder="댓글을 작성해주세요.&#13;&#10;타인을 비방하면 안대여!"
                            className={styles.comr_txtarea}/>
                  <button className={styles.comr_commWriteBtn}>등록</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CommunityRead;
