import React from 'react';

class Header extends React.Component {

    render(){
        let divStyle = {
            width:'100%',
            height:'10%',
            border:'1px solid black',
            textAlign:'center',
            fontSize:'30px'
        }
        return (
                <div style={divStyle}>
                  Ga.nG
                </div>
        );
    }
}

export default Header;
