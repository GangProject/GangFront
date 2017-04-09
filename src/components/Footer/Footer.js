import React, {Component} from 'react';
import styles from './Footer.css';

class Footer extends Component {
    ad(){
      alert('advertise');
    }
    render() {
        return (
          <div className={styles.foot}>
              <div className={styles.footMenu} onClick={this.ad}>put ad here</div>
          </div>
        );
    }
}

export default Footer;
