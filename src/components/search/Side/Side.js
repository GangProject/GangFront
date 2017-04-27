import React from 'react';
import { Link } from 'react-router';
class Side extends React.Component {

    render(){
        let divStyle = {
            width:'15%',
            height:'30%',
            textAlign:'center',
            fontSize:'20px',
            float:'left'
        }
        let tableStyle ={
          width:'100%',
          height:'100%',
          borderCollapse: 'collapse',
          border:'none'
        }
        let tdStyle = {
          border: '1px solid black',
          height:'20%'
        }
        return (
                <div style={divStyle}>
                  <table style={tableStyle}>
                  <tbody>
                    <tr><td style={tdStyle}><Link to="search/record">최근경기기록</Link></td></tr>
                    <tr><td style={tdStyle}>룬,특성</td></tr>
                    <tr><td style={tdStyle}>MMR</td></tr>
                    <tr><td style={tdStyle}>시즌별 티어</td></tr>
                    <tr><td style={tdStyle}>커뮤니티</td></tr>
                  </tbody>
                  </table>

                </div>
        );
    }
}

export default Side;
