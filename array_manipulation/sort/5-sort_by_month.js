#!/usr/bin/node

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth (events) {
  return events.sort((firstEvent, secondeEvent) => {
    return (MONTHS.indexOf(firstEvent.month) - MONTHS.indexOf(secondeEvent.month));
  });
}

module.exports = sortByMonth;
