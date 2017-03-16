import React from 'react';
import Header from './Header'
import Side from './Side'
import BestChamp from './BestChamp'
import Record from './Record'
class Main extends React.Component {
    render(){
        let sideDiv ={
          width:'15%',
          height:'1200px'
        }
        let divStyle = {
          width:'auto',
          height:'1200px'

        }
        return (
            <div style={divStyle}>
                  <Header/>
                  <BestChamp/>
                  <Side/>
                  <Record/>
            </div>
        );
    }
}

export default Main;
