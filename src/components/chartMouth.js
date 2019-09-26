import React, { Component } from 'react';
import styled from 'styled-components';
import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
const moment = require('moment');

const fromUnixTime = (unixtime) => {
  let d = moment.unix(unixtime);
  let j = moment(d._d).format('DD MMM');
  return j;
};

let ChartBlock = styled.div`
  padding-top: 15px;
  display: flex;
  flex-derection: row;
  justify-content: space-between;
  width: auto;
  overflow-x: auto;
`

class ChartMouth extends React.Component{
  state = {
    data: [
      {name: '01', uv: null},
      {name: '02', uv: null},
      {name: '03', uv: null},
      {name: '04', uv: null},
      {name: '05', uv: null},
      {name: '06', uv: null},
      {name: '07', uv: null},
      {name: '08', uv: null},
      {name: '09', uv: null},
      {name: '10', uv: null},
      {name: '11', uv: null},
      {name: '12', uv: null},
      {name: '13', uv: null},
      {name: '14', uv: null},
      {name: '15', uv: null},
      {name: '16', uv: null},
      {name: '17', uv: null},
      {name: '18', uv: null},
      {name: '19', uv: null},
      {name: '20', uv: null},
      {name: '21', uv: null},
      {name: '22', uv: null},
      {name: '23', uv: null},
      {name: '24', uv: null},
      {name: '25', uv: null},
      {name: '26', uv: null},
      {name: '27', uv: null},
      {name: '28', uv: null},
      {name: '29', uv: null},
      {name: '30', uv: null},
      {name: '31', uv: null}
    ],
    dataS: []
  };

  componentDidMount() {
    let s = this.props.cur;
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${s.toUpperCase()}&tsym=USD&limit=29`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            dataS: result.Data.Data
          })
        }
      )
      .catch(err => console.error(err))
    };
    
    render () {
      let stateArr = this.state.data;
      let apiData = this.state.dataS;
    
      let dataN = apiData.map( (item, i, arr) => {
        let p = stateArr[i];
        p.uv = item.high / 1000;
        p.name = fromUnixTime(item.time);
        return p
      });

    return (
      <ChartBlock>
        <AreaChart width={2000} height={400} dot={false} data={this.state.data}
            margin={{top: 25, right: -15, left: 5, bottom: 5}}>
          <XAxis axisLine={false}
            dataKey="name"
            fontSize={10}
            stroke={"white"}
            interval={0} 
            // padding={{ left: 20, right: 20 }} 
            // tick={{ transform: 'translate(25, 0)' }}
            tickLine={false}
          />
          <YAxis axisLine={false}
            fontSize={10}
            stroke={"white"}
            mirror
            tick={{ transform: 'translate(0, -15)' }} 
            dataKey='uv' ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} 
            type="number" 
            unit="k" 
            minTickGap={10} 
            interval={0} 
            domain={[0, 12]} 
            tickSize={1}
          />
          <CartesianGrid vertical={false}/>
          <Area
            type={"linear"}
            dataKey="uv"
            stroke="#a073ff"
            fillOpacity={0.2}
            offset='80%'
            fill='#a073ff'/>
        </AreaChart>
      </ChartBlock>
    );
  }
};

export default ChartMouth;