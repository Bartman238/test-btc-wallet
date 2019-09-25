import React from 'react';
import styled from 'styled-components';
import {store} from '../app.js'


let WalletBlock = styled.div`
  padding-top: 35px;  
  text-align: center;
`
let BalanceValue = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  color: grey;
  span {
    color: white;
  }
  .balance {
    padding-left:5px;
    font-size: 40px;
  }
  i {
    padding-top: 10px;
    float: left;
  }
`


export default class extends React.Component{
  state = {
    cash: null,
    btcProfitSummary: null,
    ethProfitSummary: null,
    xrpProfitSummary: null
  };
  
  componentDidUpdate() {
    let test = store.getState();
    if (this.state.cash != test.sumValue) {
      this.setState({
        cash: test.sumValue,
        btcProfitSummary: test.btcProfitSummary,
        ethProfitSummary: test.ethProfitSummary,
        xrpProfitSummary: test.xrpProfitSummary
      })
    };
  };

  render(){
    let s = this.state.btcProfitSummary + this.state.ethProfitSummary + this.state.xrpProfitSummary;

    let percent = (col) => {
      if (col >= 0) {
        return '#0ddb86';
      } else { return '#ff7976'; };
    };
    let profitOrLoss = {'color': percent(s)};

    return (
      <WalletBlock> 
        <BalanceValue>Your total balance</BalanceValue>
        <BalanceValue><span><i className="fas fa-dollar-sign"></i></span><span className='balance'>{parseFloat(this.state.cash).toFixed(2)}</span></BalanceValue>
        <BalanceValue>24h Changes</BalanceValue>
        <BalanceValue style={profitOrLoss}> {s.toFixed(2)}$ </BalanceValue>
      </WalletBlock>
    )
  }
};