import React, { Component } from 'react';
import styled from 'styled-components';
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
const moment = require('moment');

const fromUnixTime = (unixtime) => {
  let d = moment.unix(unixtime);
  let j = moment(d._d).format('ddd');
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

class ChartWeek extends React.Component{
  state = {
    data: [
      {name: 'Mon', uv: null},
      {name: 'Tue', uv: null},
      {name: 'Wed', uv: null},
      {name: 'Thu', uv: null},
      {name: 'Fri', uv: null},
      {name: 'Sat', uv: null},
      {name: 'Sun', uv: null}
    ],
    dataS: []
  };

  componentDidMount() {
    let s = this.props.cur;
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${s.toUpperCase()}&tsym=USD&limit=6`)
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
        <AreaChart width={1000} height={400} dot={false} data={this.state.data}
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
            stroke="#8884d8"
            stopOpacity={0.7}
            offset='80%'
            fill='#8884d8'/>
        </AreaChart>
      </ChartBlock>
    );
  }
};

export default ChartWeek;