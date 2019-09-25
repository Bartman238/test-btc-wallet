import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {updateBalance} from './actions/action.js';
import styled from 'styled-components';
import { MainPage, InfoPage } from './routes/pages.js'




export function updateBalanceBtc(state = {}, action) {
  let data = state;
  switch (action.type === "UPDATE_BALANCE"){
    case (action.btcSum != null && action.sumValue != NaN):
      data.btcSum = action.btcSum
      break;
    case (action.ethSum != null && action.sumValue != NaN):
      data.ethSum = action.ethSum
      break;
    case (action.xrpSum != null && action.sumValue != NaN):
      data.xrpSum = action.xrpSum
      break;
    case (action.ethProfitSummary != undefined):
      data.ethProfitSummary = action.ethProfitSummary
      break;  
    case (action.btcProfitSummary != undefined):
      data.btcProfitSummary = action.btcProfitSummary
      break;
    case (action.xrpProfitSummary != undefined):
      data.xrpProfitSummary = action.xrpProfitSummary
      break;
    case (action.btcBalance != undefined):
        data.btcBalance = action.btcBalance
        break;
    case (action.ethBalance != undefined):
      data.ethBalance = action.ethBalance
      break;
    case (action.xrpBalance != undefined):
      data.xrpBalance = action.xrpBalance
      break;
    case (action.btcProfit != undefined):
        data.btcProfit = action.btcProfit
        break;
    case (action.ethProfit != undefined):
        data.ethProfit = action.ethProfit
        break;
    case (action.xrpProfit != undefined):
        data.xrpProfit = action.xrpProfit
        break;
  };
  if (action.sumValue != NaN) {
    data.sumValue = data.xrpSum + data.ethSum + data.btcSum;
    return data;
  };  
};


export const store = createStore(updateBalanceBtc);

//// ДЛЯ ДЕБАГА

// store.subscribe( () => {
//   console.log(store.getState());
// });


export default class extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={MainPage} />
          <Route path='/btcInfo' exact component={ () => (<InfoPage cur='btc'/>)} />
          <Route path='/ethInfo' exact component={ () => (<InfoPage cur='eth'/>)} />
          <Route path='/xrpInfo' exact component={ () => (<InfoPage cur='xrp'/>)} />
        </Router>
      </Provider>

    );
  }
};