import React from 'react';
import styles from './Feedback.css';

class Feedback extends React.Component {

  back(){
    history.go(-1);
  }

  constructor(props) {
      super(props);

      this.state = {
          list:[
            {writer:"boseok", datetime:"16.04.05", content:"아아 지루해애애애애애애애 잼없엉!\n노잼핵노잼~"},
            {writer:"boseok2", datetime:"16.04.06", content:"저만글쓰나요? ㅡㅡ\n개행문자 어떻게하죠?ㅡㅡ개행문자는\\n으로..\n리액트 넘-나 어려운것"},
            {writer:"boseok3", datetime:"16.04.07", content:"이거 누가 만들었죠?\n너무 안예쁜데.."},
          ]
      };
  }

  render() {
    return(
      <div>
        <div className={styles.container}>
          <span className={styles.nickname}>
            <input type="text" placeholder="닉네임"/><input type="password" placeholder="패스워드"/>
          </span>
          <textarea/>
          <img src={require('./Img/write.png')} className={styles.submitBtn} onClick={this.write}/>
          <div className={styles.tab}>
            {this.state.list.map((feed, i) => {
                        return (<FeedbackList writer={feed.writer}
                                            datetime={feed.datetime}
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

class FeedbackList extends React.Component {
  render(){
    return(
      <div>
      <hr/>
      <table className={styles.tabList}>
        <tr>
          <td>{this.props.writer}</td><td>{this.props.datetime}</td>
        </tr>
        <tr>
          <td colSpan="2">
            { this.props.content.split('\n').map( line => {
                return (<span>{line}<br/></span>)
              })
            }
          </td>
        </tr>
      </table>

      </div>
    );
  }
}

export default Feedback;
