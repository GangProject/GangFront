import React from 'react';
import styles from './Community.css';

class Community extends React.Component {

  back(){
    history.go(-1);
  }

  modCommentnum(result){
    for(var i in result){
      if(result[i].commentNum!=0){
        var tmp = "[";
        tmp += result[i].commentNum;
        tmp += "]";
        //alert(result[i].commentNum+tmp);
        //this.setState({commentNum:tmp});
        result[i].commentNum = tmp;
      } else {
        //this.setState({commentNum:null});
        result[i].commentNum = null;
      }
    }
  }

  componentDidMount() {
      //this.callAjax();

  }

  callAjax(){
      $.ajax({
        url:'http://13.124.33.113:8080/Gang/api/hello',
        context:this,
        dataType:'json',
        type:'GET',
        success: function(result){


          this.setState({
            list:result.data
          });
        },
        error: function(request, status, error) {
          // this.setState({
          //
          // });
          console.log('error in Gang/api');
          console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
      });
    }

  constructor(props) {
      super(props);

      this.state = {
          list:[
            {num:"1", title:"제목입니다", commentNum:"3", writer:"보석", datetime:"16.04.06"},
            {num:"2", title:"홍멍청이야!", commentNum:"0", writer:"정보석", datetime:"16.04.07"}
          ]
      };

      this.modCommentnum(this.state.list);
  }


  render() {
    return(
      <div>
        <div className={styles.container}>
          <table>
            <thead>

                <td className={styles.num}>번호</td>
                <td className={styles.title}>제목</td>
                <td className={styles.writer}>작성자</td>
                <td className={styles.datetime}>작성일</td>
                <td><img src={require('./Img/write.png')} className={styles.writeBtn} onClick={this.write}/></td>

            </thead>
            <tbody>
              {this.state.list.map((list, i) => {
                return (<CommunityList num={list.num}
                                      title={list.title}
                                      commentNum={list.commentNum}
                                      writer={list.writer}
                                      datetime={list.datetime}
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
        <tr>
          <td className={styles.numList}>{this.props.num}</td>
          <td className={styles.titleList}>{this.props.title} <span className={styles.commentNum}>{this.props.commentNum}</span></td>
          <td>{this.props.writer}</td>
          <td>{this.props.datetime}</td>
        </tr>
    );
  }
}

export default Community;
