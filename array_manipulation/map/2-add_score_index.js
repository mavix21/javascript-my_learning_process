#!/usr/bin/node

function addScore (players) {
  return players.map((player, index) => {
    if (index > 2) return player;

    return {
      id: player.id,
      score: player.score + 10
    };
  });
}

module.exports = addScore;
