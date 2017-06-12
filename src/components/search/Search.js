import React from 'react';
import BestChamp from './BestChamp/BestChamp';
import Side from './Side/Side';
import Record from './Record/Record';
import styles from './Search.css';

class Search extends React.Component {
    render() {

        return (
            /**<BestChamp/>
            <Side/>
            <Record/>**/
            <div className={styles.divStyle}>
              <BestChamp/>
              <Side/>
              {this.props.children}
            </div>
        );
    }
}

export default Search;
