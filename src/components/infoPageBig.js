import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

let CurrencyBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-between;
  border-radius: 10px;
  min-width: 65%;
  color: white;
  margin-top: 15px;
  margin-bottom: 15px
  margin-right: 10px;
  padding-right: 20px;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

let CurrencyInfo = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  max-width: 60px;
  // margin-right: 15%;
  span {
    font-size: 35px;
    float: left;
  }
  .currencyName {
    padding-left: 40px;
  }
  h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: grey;
  }
`
let CurrencyBalance = styled.div`
  // float: right;
  padding-top: 10px;
  // padding-right: 5%;

  h5 {
    // float: right;
    margin-top: 0px;
    margin-left: 30%;
    color: grey;
  }
`

export default class InfoPageBig extends React.Component{
  state ={
    btcBalance: null,
    ethBalance: null,
    xrpBalance: null,
    btcProfit: null,
    ethProfit: null,
    xrpProfit: null
  }

  componentDidMount() {
    let data = store.getState();
    this.setState({
      btcBalance: data.btcBalance,
      ethBalance: data.ethBalance,
      xrpBalance: data.xrpBalance,
      btcProfit: data.btcProfit,
      ethProfit: data.ethProfit,
      xrpProfit: data.xrpProfit
    })
  }

  render() {
    let percent = (col) => {
      if (col >= 0) {
        return '#0ddb86';
      } else { return '#ff7976'; };
    };

    let profit = (cur) => {
      switch (cur != undefined) {
        case ( cur === 'btc'):
          let x1 = parseFloat(this.state.btcProfit);
          return x1.toFixed(2);
          break;
        case ( cur === 'eth'):
            let x2 = parseFloat(this.state.ethProfit);
            return x2.toFixed(2);
            break;
        case ( cur === 'xrp'):
          let x3 = parseFloat(this.state.xrpProfit);
          return x3.toFixed(2);
          break;
      };
    };

    let profitCol = (cur) => {
      switch (cur != undefined) {
        case (cur === 'btc'):
          let z1 = {'color': percent(this.state.btcProfit), 'text-align': 'right'};
          return z1;
          break;
        case (cur === 'eth'):
            let z2 = {'color': percent(this.state.ethProfit), 'text-align': 'right'};
            return z2;
            break;
        case (cur === 'xrp'):
          let z3 = {'color': percent(this.state.xrpProfit), 'text-align': 'right'};
          return z3;
          break;
        
      }
    }

    switch (this.props.curName != undefined){
      case (this.props.curName == 'btc'):
        return (
          <CurrencyBlock>
            <CurrencyInfo>
              <span className="icon icon-btc"></span>
              <p className="currencyName">BTC</p>
              <p className="currencyName"><h5>Bitcoin</h5></p>
            </CurrencyInfo>
            <CurrencyBalance>
              <p> {this.state.btcBalance} </p>
              <p style={profitCol('btc')}> {profit('btc')}% </p>
            </CurrencyBalance>
          </CurrencyBlock>
        )
      break;
      case (this.props.curName == 'eth'):
        return (
          <CurrencyBlock>
            <CurrencyInfo>
              <span className="icon icon-eth"></span>
              <p className="currencyName">ETH</p>
              <p className="currencyName"><h5>Etherium</h5></p>
            </CurrencyInfo>
            <CurrencyBalance>
              <p> {this.state.ethBalance} </p>
              <p style={profitCol('eth')}> {profit('eth')}% </p>
            </CurrencyBalance>
          </CurrencyBlock>
        )
      break;
      case (this.props.curName == 'xrp'):
        return (
          <CurrencyBlock>
            <CurrencyInfo>
              <span className="icon icon-xrp"></span>
              <p className="currencyName">XRP</p>
              <p className="currencyName"><h5>Ripple</h5></p>
            </CurrencyInfo>
            <CurrencyBalance>
              <p> {this.state.xrpBalance} </p>
              <p style={profitCol('xrp')}> {profit('xrp')}% </p>
            </CurrencyBalance>
          </CurrencyBlock>
        )
      break;
    }
  }
}