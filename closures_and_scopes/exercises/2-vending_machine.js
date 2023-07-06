#!/usr/bin/node

function createVendingMachine () {
  const stock = ['Cola', 'Chips', 'Chocolate', 'Juice', 'Nuts'];
  let coins = 0;

  function add25 () {
    coins += 25;

    if (coins < 100) {
      console.log(`Insert ${100 - coins} more coins`);
    } else {
      const randomIndex = Math.floor(Math.random() * stock.length);
      console.log(`You got some ${stock[randomIndex]}`);
      coins = 0;
    }
  }

  return add25;
}

const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
