import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {updateBalance} from '../actions/action.js';
import BtnSearch from '../components/btnSearch.js';
import BtnNotify from '../components/btnNotify.js';
import styled from 'styled-components';
import Wallet from '../components/wallet.js';
import BtcCurrency from '../components/btcCurrency.js';
import EthCurrency from '../components/ethCurrency.js';
import XrpCurrency from '../components/xrpCurrency.js';
import {Link} from 'react-router-dom';
import { btcInfoPage } from './pages.js'


let App = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
`

let LinkStyle = {
  'width': '100%',
  'display': 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecoration: 'none'
}

let BtnsLine = styled.span`
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default class MainPage extends React.Component{
  state = {
    btc: null,
    btcProfitPrc: null,
    eth: null,
    ethProfitPrc: null,
    xrp: null,
    xrpProfitPrc: null
  };

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            btc: result.RAW.BTC.USD.PRICE,
            btcProfitPrc: result.RAW.BTC.USD.CHANGEPCTDAY,
            eth: result.RAW.ETH.USD.PRICE,
            ethProfitPrc: result.RAW.ETH.USD.CHANGEPCTDAY,
            xrp: result.RAW.XRP.USD.PRICE,
            xrpProfitPrc: result.RAW.XRP.USD.CHANGEPCTDAY,
          })
        }
      )
      .catch(err => console.error(err))
  };

  render(){
    store.dispatch({ type: 'UPDATE_BALANCE', btcProfit: this.state.btcProfitPrc});
    store.dispatch({ type: 'UPDATE_BALANCE', ethProfit: this.state.ethProfitPrc});
    store.dispatch({ type: 'UPDATE_BALANCE', xrpProfit: this.state.xrpProfitPrc});
    
    return (
      <App>
        <BtnsLine>
          <BtnSearch/>
          <BtnNotify/>
        </BtnsLine>
        <Wallet/>
        <br></br>
        <Link style={LinkStyle} to='/btcInfo'> <BtcCurrency btc={this.state.btc} btcProfitPrc={this.state.btcProfitPrc} /> </Link>
        <Link style={LinkStyle} to='/ethInfo'> <EthCurrency eth={this.state.eth} ethProfitPrc={this.state.ethProfitPrc} /> </Link>
        <Link style={LinkStyle} to='/xrpInfo'> <XrpCurrency xrp={this.state.xrp} xrpProfitPrc={this.state.xrpProfitPrc} /> </Link>
      </App>
    );
  }
};