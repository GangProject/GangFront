import React, {Component} from 'react';
import Common from '../Common/js/Common.js';
import styles from './CommunityRead.css';

class CommunityRead extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id:"",
          title:"",
          content:"",
          createdBy:"",
          createdAt:"",
          commentList:[]
      };
  }

  GetArticle(articleId) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/article/read?articleId='+articleId)
      .then((data) => {
        Common.modDatetime2(data.commentList);
        console.log(data);

        this.setState({
          id:data.id,
          title:data.title,
          content:data.content,
          createdBy:data.createdBy,
          createdAt:data.createdAt,
          commentList: data.commentList
        });
      });
  }

  componentDidMount() {
    this.GetArticle(this.props.params.splat);
  }

  render() {
    let title = this.state.title;
    let originContent = this.state.content;
    let createdBy = this.state.createdBy;
    let createdAt = this.state.createdAt;

    return(
        <div className={styles.container}>
          <table className={styles.comr_tab}>
            <thead>
              <tr>
                <td>
                  <img src={require('../Common/img/back.png')} className={styles.backBtn} onClick={Common.back}/>
                </td>
              </tr>
              <tr>
                <td className={styles.comr_title}>{title}</td>
              </tr>
              <tr>
                <td className={styles.comr_createdBy_At}>
                  <span className={styles.comr_createdBy}>{createdBy}</span>
                  <span className={styles.comr_sep}>|</span>
                  <span>{createdAt}</span>
                </td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className={styles.comr_content}>
                  <div>
                    {
                      originContent.split('\\n').map( (line,i) => {
                        return (<span key={i}>{line}<br/></span>)
                      })
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.comr_comm}>댓글 {this.state.commentList.length}개</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.comr_comdiv}>
            {this.state.commentList.map((list, i) => {
              if(this.state.commentList.length-1==i){ //리스트의 마지막꺼는 hr를 포함안함
                return (<CommunityCommentList key={i}
                                      writerName={list.createdBy}
                                      datetime={list.createdAt.nano}
                                      content={list.content}
                        />
                );
              } else {
                return (
                  <div key={i}>
                    <CommunityCommentList
                                      writerName={list.createdBy}
                                      datetime={list.createdAt.nano}
                                      content={list.content}
                    />
                    <hr className={styles.comr_comm_hr}/>
                  </div>
                );
              }

            })
            }
            <div className={styles.comr_commWriteWrapper}>
              <div className={styles.comr_write_comment}>
                <textarea placeholder="댓글을 작성해주세요.&#13;&#10;타인을 비방하면 안대여!"
                          className={styles.comr_txtarea}/>
                <button className={styles.comr_commWriteBtn}>등록</button>
              </div>
            </div>

          </div>

        </div>
    );
  }
}

class CommunityCommentList extends Component {
  render(){
    return(
      <div>
        <div className={styles.comr_comdiv_div}>
          <div className={styles.comr_comdiv_div_div}>
            <span className={styles.comr_comment_writer}>{this.props.writerName}</span>
            <span className={styles.comr_comment_datetime}>{this.props.datetime}</span>
          </div>
          <span className={styles.comr_comment_content}>
            {
              this.props.content.split('\\n').map( (line,i) => {
                return (<span key={i}>{line}<br/></span>)
              })
            }
          </span>
        </div>

      </div>
    );
  }
}

export default CommunityRead;
