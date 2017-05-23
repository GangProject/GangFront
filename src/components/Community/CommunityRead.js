import React, {Component} from 'react';
import { browserHistory } from 'react-router';
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
      }
      //this.onChange = this.onChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
  }

  GetArticle(articleId) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/article/read?articleId='+articleId)
      .then((data) => {
        Common.modDatetime2(data.commentList);
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

  goBack(){
    browserHistory.push("/community");
  }

  save() {
    var addr = Common.getApi();
    var formData = new FormData();
    var url = unescape(location.href); //url을 가져와서
    var urlList = url.split("/"); //url을 잘라서 배열에 저장하고
    var len = urlList.length; //배열의 마지막꺼=글번호

    formData.append("articleId", urlList[len-1]);
    formData.append("content", $("#content").val());

    $.ajax({
      type : "post",
      url : addr+'api/comment/save',
      contentType: false,
      processData: false,
      //mimeType:"multipart/form-data",
      data : formData,
      beforeSend: function() {
        $('html').css("cursor","wait");
        //$('html').fadeOut();
      },
      complete: function() {
        $('html').css("cursor","auto");
        //$('html').fadeIn();
      },
      success : function(data) {
        /*
        {\n\
          this.props.content.split('\\n').map( (line,i) => {\n\
            return (<span key={i}>{line}<br/></span>)\n\
          })\n\
        }\n\
        */
        console.log($("#commentCounter").val());
        var html = "";
        if($("#commentCounter").val()!=0){
          html+="<hr className={styles.comr_comm_hr}/>";
        }
        html+="<div className={styles.comr_comdiv_div}>\n\
            <div className={styles.comr_comdiv_div_div}>\n\
              <span className={styles.comr_comment_writer}>작성자이름</span>\n\
              <span className={styles.comr_comment_datetime}>방금</span>\n\
            </div>\n\
            <span className={styles.comr_comment_content}>\n\
              "+$("#content").val()+"\n\
            </span>\n\
          </div>";
        $('#last').append(html);
      },
      error : function(request, status, error) {
        $('.container').empty();
        var ht = '';
        ht += "code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error;
        $('.container').append(ht);
      }
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
                  <img src={require('../Common/img/back.png')} className={styles.backBtn} onClick={this.goBack}/>
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
                <td className={styles.comr_comm}>
                  댓글 {this.state.commentList.length}개
                  <input type="hidden" id="commentCounter" value={this.state.commentList.length}/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.comr_comdiv}>

            {this.state.commentList.map((list, i) => {
              if(this.state.commentList.length-1==i){ //리스트의 마지막꺼는 hr를 포함안함
                return (
                    <div>
                        <CommunityCommentList key={i}
                                      writerName={list.createdBy}
                                      datetime={list.createdAt.nano}
                                      content={list.content}
                        />

                    </div>
                );
              } else {
                return (
                  <div>
                    <CommunityCommentList key={i}
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
            <div id="last"></div>
            <div className={styles.comr_commWriteWrapper}>
              <div className={styles.comr_write_comment}>
                <textarea placeholder="댓글을 작성해주세요.&#13;&#10;타인을 비방하면 안대여!" id="content"
                          className={styles.comr_txtarea}/>
                <button onClick={this.save} className={styles.comr_commWriteBtn}>등록</button>
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
