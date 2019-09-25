import React from 'react';

const walletBalance = {};

export function updateBalanceBtc(btc) {
  return {type: 'UPDATE_BALANCE', btc}
}