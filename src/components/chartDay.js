import React, { Component } from 'react';
import styled from 'styled-components';
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
const moment = require('moment');

const fromUnixTime = (unixtime) => {
  let d = moment.unix(unixtime);
  let j = moment(d._d).format('kk') + 'h00';
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

class ChartDay extends React.Component{
  state = {
    data: [
      {name: '0h00', uv: null},
      {name: '1h00', uv: null},
      {name: '2h00', uv: null},
      {name: '3h00', uv: null},
      {name: '4h00', uv: null},
      {name: '5h00', uv: null},
      {name: '6h00', uv: null},
      {name: '7h00', uv: null},
      {name: '8h00', uv: null},
      {name: '9h00', uv: null},
      {name: '10h00', uv: null},
      {name: '11h00', uv: null},
      {name: '12h00', uv: null},
      {name: '13h00', uv: null},
      {name: '14h00', uv: null},
      {name: '15h00', uv: null},
      {name: '16h00', uv: null},
      {name: '17h00', uv: null},
      {name: '18h00', uv: null},
      {name: '19h00', uv: null},
      {name: '20h00', uv: null},
      {name: '21h00', uv: null},
      {name: '22h00', uv: null},
      {name: '23h00', uv: null},
      {name: 'test', uv: null}
    ],
    dataS: []
  };

  componentDidMount() {
    let s = this.props.cur;
    fetch(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${s.toUpperCase()}&tsym=USD&limit=23`)
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

export default ChartDay;