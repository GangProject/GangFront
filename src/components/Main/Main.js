import React, {Component} from 'react';

import Title from './Title/Title';
import Info from './Info/Info';

class Main extends Component {
  render() {
    return(
      <div>
        <Title/>
        <Info/>
      </div>
    );
  }
}

export default Main;
