import React from 'react';
import BestChamp from './BestChamp/BestChamp';
import Side from './Side/Side';
import Record from './Record/Record';

class Search extends React.Component {
    render() {
      let divStyle = {
        marginTop:70
      }
        return (
            /**<BestChamp/>
            <Side/>
            <Record/>**/
            <div style={divStyle}>
              <BestChamp/>
              <Side/>
              {this.props.children}
            </div>
        );
    }
}

export default Search;
