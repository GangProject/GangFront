import React from 'react';

import Title from './Title/Title';
import Info from './Info/Info';

class Main extends React.Component {
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
