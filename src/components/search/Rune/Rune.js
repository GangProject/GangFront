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
      var id = Common.getUserName();
      this.getRune(id);
    }
    getRune(id) {
      var addr = Common.getCoreApi();

      return $.getJSON(addr+'api/rune/summonerName?summonername='+id)
        .then((data)=> {

            this.setState({
              runeList:data
            });
            console.log(this.state.runeList);
            console.log(this.state.runeList[1]);
            console.log(this.state.runeList[1].name);
        })
        .error(function() {
          alert("서버로부터 데이터를 받아올 수 없습니다.");
        });
    }
    runeClick(i){
        this.setState({currentRune:i});
    }

    render(){
        return (
          <div className={styles.divStyle}>
            <div className={styles.rune_div}>

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
