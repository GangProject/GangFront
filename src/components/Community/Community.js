import React, {Component} from 'react';
import styles from './Community.css';

class Community extends Component {

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

  modDatetime(list){
    for(var i in list){
      var tmp = "";
      var month = list[i].modifiedAt.monthValue;
      var day = list[i].modifiedAt.dayOfMonth;
      tmp += month + "." + day;
      list[i].modifiedAt.nano = tmp;
      alert(tmp);
    }
  }

  componentDidMount() {
    this.GetList(1);
    //this.modDatetime(this.state.list);
  }

  GetList(page) {
    return $.getJSON('http://52.79.215.66:8080/Gang/api/article?currentPage='+page)
      .then((data) => {
        this.setState({ list: data.list });
      });
  }

  constructor(props) {
      super(props);

      this.state = {
          list:[]
      };


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
