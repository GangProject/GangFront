import React from 'react';

class Record extends React.Component {

    render(){
        let divStyle = {
            width:'84.8%',
            height:'100%',
            border:'1px solid black',
            textAlign:'center',
            fontSize:'30px',
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
          height:'10%'
        }
        return (
                <div style={divStyle}>
                  <table style={tableStyle}>
                  <tbody>
                    <tr><td style={tdStyle}>1</td></tr>
                    <tr><td style={tdStyle}>2</td></tr>
                    <tr><td style={tdStyle}>3</td></tr>
                    <tr><td style={tdStyle}>4</td></tr>
                    <tr><td style={tdStyle}>5</td></tr>
                    <tr><td style={tdStyle}>6</td></tr>
                    <tr><td style={tdStyle}>7</td></tr>
                    <tr><td style={tdStyle}>8</td></tr>
                    <tr><td style={tdStyle}>9</td></tr>
                    <tr><td style={tdStyle}>10</td></tr>
                    </tbody>
                  </table>
                </div>
        );
    }
}

export default Record;
