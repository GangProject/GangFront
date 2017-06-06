import React, {Component} from 'react';
import Common from '../Common/js/Common.js';
import styles from './Feedback.css';

class Feedback extends Component {

  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };
  }

  componentDidMount() {
    this.getList(1);
  }

  getList(page) {
    var addr = Common.getApi();
    return $.getJSON(addr+'api/feedBack?currentPage='+page)
      .then((data) => {
        Common.modDatetime2(data.result.list); //Common.js에서 static메소드를 가져와서 날짜변환
        data.result.list.reverse(); //게시물을 제일 마지막부터 보기위해 reverse메소드로 리스트를 역순으로 변환..인데 성능문제?
        this.setState({ list: data.result.list });
      })
      .error(function() {
        alert("서버로부터 데이터를 받아올 수 없습니다");
      });;
  }

  save() {
    var addr = Common.getApi();
    var formData = new FormData();
    var nick = $("#nick").val();
    var passwd = $("#passwd").val();
    var content = $("#content").val();
    formData.append("name", nick);
    formData.append("password", passwd);
    formData.append("content", content);

    $.ajax({
      type : "post",
      url : addr+'api/feedBack/save',
      contentType: false,
      processData: false,
      //mimeType:"multipart/form-data",
      data : formData,
      beforeSend: function() {
        $('html').css("cursor","wait");
      },
      complete: function() {
        $('html').css("cursor","auto");
      },
      success : function(data) {
        var html="<hr style='margin-top: 1.5rem;'/>\n\
        <table style='width: 100%;'>\n\
          <tbody>\n\
            <tr style='height: 3rem;'>\n\
              <td style='width: 2rem;\n\
                text-align: left;\n\
                padding-left: 1rem;\n\
                font-weight: bold;\n\
                font-size: 1.2rem;'>\n\
                  "+nick+"\n\
              </td>\n\
              <td style='width: 4rem;\n\
                text-align: right;\n\
                padding-right: 1rem;'>\n\
                  방금\n\
              </td>\n\
            </tr>\n\
            <tr style='height: 3rem;'>\n\
              <td colSpan='2' style='text-align: left;padding-left: 1rem;'>\n\
                "+content+"\n\
              </td>\n\
            </tr>\n\
          </tbody>\n\
        </table>\n\
        ";
        $('#f_last').prepend(html);
        $('#nick').val('');
        $('#passwd').val('');
        $('#content').val('');
      },
      error : function(request, status, error) {
        $('.container').empty();
        var ht = '';
        ht += "code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error;
        $('.container').append(ht);
      }
    });
  }


  render() {
    return(
      <div>
        <div className={styles.container}>
          <input type="text" placeholder="닉네임" id="nick" className={styles.anonymForm}/>
          <input type="password" placeholder="패스워드" id="passwd" className={styles.anonymForm}/>
          <textarea placeholder="내용을 입력하세요" id="content" className={styles.anonymTextarea}/>
          <img src={require('../Common/img/write.png')} className={styles.submitBtn} onClick={this.save}/>
          <div className={styles.list}>
            <div id="f_last"></div>
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

class FeedbackList extends Component {
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
              { this.props.content.split('\\n').map( (line, i) => {
                  return (<span key={i}>{line}<br/></span>)
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
