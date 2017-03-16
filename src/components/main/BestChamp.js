import React from 'react';

class BestChamp extends React.Component {

    render(){
        let divStyle = {
            width:'100%',
            height:'15%',
            textAlign:'center',
            fontSize:'15px'
        }
        let tableStyle ={
          width:'100%',
          height:'100%',
          borderCollapse: 'collapse',
          border:'none'
        }
        let firstTdStyle ={
          border: '1px solid black',
          width:'15%'
        }
        let tdStyle = {
          border: '1px solid black',
          width:'16%'
        }
        let lastTdStyle ={
          border: '1px solid black',
          width:'5%'
        }
        return (
                <div style={divStyle}>
                <table style={tableStyle}>
                  <tr>
                    <td style={firstTdStyle}>ID티어</td>
                    <td style={tdStyle}>리신</td>
                    <td style={tdStyle}>제드</td>
                    <td style={tdStyle}>애쉬</td>
                    <td style={tdStyle}>가렌</td>
                    <td style={tdStyle}>베인</td>
                    <td style={lastTdStyle}>더보기</td>
                  </tr>

                </table>
                </div>
        );
    }
}

export default BestChamp;
