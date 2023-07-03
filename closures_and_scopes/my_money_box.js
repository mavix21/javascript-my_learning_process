#!/usr/bin/node

function moneyBox (coins) {
  let saveCoins = 0;

  function countCoins (coins) {
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // $5
myMoneyBox(5); // $10
myMoneyBox(15); // $25

const anaMoneyBox = moneyBox();
anaMoneyBox(10); // $10
anaMoneyBox(20); // $30
anaMoneyBox(5); // $35
