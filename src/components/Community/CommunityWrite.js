import React, {Component} from 'react';
import Common from '../Common/js/Common.js';
import styles from './CommunityWrite.css';
import FileInput from 'react-file-input';
class CommunityWrite extends Component {
  constructor(props) {
      super(props);
  }

  save() {
    var addr = Common.getApi();
    var formData = new FormData();
    formData.append("title", $('.comw_titleForm').val());
    formData.append("content", $('.comw_textarea').val());
    alert(formData.title+" "+formData.content);
    //formData.append("file", $("#file")[0].files[0]);
    // $($(".comw_inputFile")[0].files).each(function(index, file) {
    //   formData.append("file", file);
    // });

    $.ajax({
      type : "post",
      url : addr+'api/article/save',
      contentType: false,
      processData: false,
      mimeType:"multipart/form-data",
      data : formData,
      beforeSend: function() {
        $('html').css("cursor","wait");
        $('html').fadeOut();
      },
      complete: function() {
        $('html').css("cursor","auto");
        $('html').fadeIn();
      },
      success : function(data) {
        alert(data.status);
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
          <form encType="multipart/form-data">
          <table className={styles.comw_tab}>
            <thead>
              <tr>
                <td className={styles.comw_td1}>
                  <img src={require('../Common/img/back.png')} className={styles.comw_backBtn} onClick={Common.back}/>
                  <img src={require('../Common/img/write.png')} className={styles.comw_writeBtn} onClick={this.save}/>
                </td>
              </tr>
              <tr>
                <td>
                    <input type="text" placeholder="제목" className={styles.comw_titleForm}/>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <textarea placeholder="내용을 입력하세요" className={styles.comw_textarea}/>
                </td>
              </tr>
              <tr>
                <td>
                  <FileInput name="files"
                    accept=".png,.gif,.pptx,.js"
                    placeholder="클릭해서 파일을 첨부하세요"
                    className={styles.comw_inputFile}
                    onChange={this.handleChange}
                    multiple />
                </td>
              </tr>
            </tbody>
          </table>
          </form>
        </div>
      </div>
    );
  }

}

export default CommunityWrite;
