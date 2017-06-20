import React, {Component} from 'react';
import styles from './Rune.css'
import Common from '../../Common/js/Common.js';

class Rune extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runeList:[],
            currentRune:1
        };

    }
    componentDidMount() {
        this.getRune();
    }
    getRune() {
      var addr = Common.getCoreApi();
      var id = Common.getUserName();
      return $.getJSON(addr+'api/rune/summonerName?summonername='+id)
        .then((data)=> {

            this.setState({
              runeList:data
            });


        })

        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });

    }
    runeClick(i){
        this.setState({currentRune:i});
    }

    render(){
        var f;
        var ff;
        return (

          <div className={styles.divStyle}>
            <div className={styles.rune_div}>
            <table>
                <thead>
                    <tr>


                          {this.state.runeList.map((list, i) => {
                              if(this.state.currentRune==i+1){
                                  return (
                                      <td
                                          key={i} className={styles.rune_currentRune}>
                                          <RuneList
                                              runeName={list.name}
                                              n={i+1}
                                              />
                                      </td>);
                              } else {
                                  return (
                                      <td onClick={()=>this.runeClick(i+1)}
                                          key={i} className={styles.rune_runeLists}>
                                          <RuneList
                                              runeName={list.name}
                                              n={i+1}
                                              />
                                      </td>);
                              }
                          })

                        }

                    </tr>
                </thead>

            </table>
            <table>
            <tbody>
                <tr className={styles.rune_table2}>
                    <td className={styles.rune_content}>

                        <div className={styles.rune_cont_hr}>
                            <hr/>
                            <div className={styles.rune_png}>
                              표식<br/>
                              {f=(() => {

                                if(this.state.runeList[this.state.currentRune-1]==undefined)
                                {
                                  return(<p></p>);
                                }
                                else{
                                    {ff=this.state.runeList[this.state.currentRune-1].rune.red.map(f=(list, i)=> {

                                      return(
                                        <p key={i}>{list.name}&nbsp;x
                                        &nbsp;{list.number}</p>
                                      );
                                    })}

                                }
                              })()}
                              {ff}
                            </div>

                            <hr/>
                            <div className={styles.rune_png}>
                                인장<br/>
                                {f=(() => {

                                  if(this.state.runeList[this.state.currentRune-1]==undefined)
                                  {
                                    return(<p></p>);
                                  }
                                  else{
                                      {ff=this.state.runeList[this.state.currentRune-1].rune.yellow.map(f=(list, i)=> {

                                        return(
                                          <p key={i}>{list.name}&nbsp;x
                                          &nbsp;{list.number}</p>
                                        );
                                      })}

                                  }
                                })()}
                                {ff}
                            </div>
                            <hr/>
                            <div className={styles.rune_png}>
                                문양<br/>
                                {f=(() => {

                                  if(this.state.runeList[this.state.currentRune-1]==undefined)
                                  {
                                    return(<p></p>);
                                  }
                                  else{
                                      {ff=this.state.runeList[this.state.currentRune-1].rune.blue.map(f=(list, i)=> {
                                        console.log(list);
                                        console.log(list.name);
                                        return(
                                          <p key={i}>{list.name}&nbsp;x
                                          &nbsp;{list.number}</p>
                                        );
                                      })}

                                  }
                                })()}
                                {ff}
                            </div>
                            <hr/>
                            <div className={styles.rune_png}>
                                정수<br/>
                                {f=(() => {

                                  if(this.state.runeList[this.state.currentRune-1]==undefined)
                                  {
                                    return(<p></p>);
                                  }
                                  else{
                                      {ff=this.state.runeList[this.state.currentRune-1].rune.black.map(f=(list, i)=> {
                                      
                                        return(
                                          <p key={i}>{list.name}&nbsp;x
                                          &nbsp;{list.number}</p>
                                        );
                                      })}

                                  }
                                })()}
                                {ff}
                            </div>
                            <hr/>
                        </div>
                        <div>
                            <span className={styles.rune_cont_runeName}>
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
          </div>
        );

    }
}

class RuneList extends Component {
    render(){
        return (
            <span>
                {this.props.n+". "+this.props.runeName}
            </span>
        );
    }
}

export default Rune;
