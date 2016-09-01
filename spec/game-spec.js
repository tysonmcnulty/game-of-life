const Game = require('../game');

describe('game', () => {
  const glider = [
    '0100',
    '0101',
    '0110',
    '0000',
  ];
  var game;

  beforeEach(function() {
    game = new Game(glider);
  })

  describe('.grid', () => {
    it('gets the game grid', function() {
      expect(game.grid).toEqual(glider);
    });
  });

  describe('#next', () => {
    it('applies the rules of the game of life to the current state', () => {
      game.next();
      game.next();
      game.next();
      game.next();
      expect(game.grid).toEqual([
        '0000',
        '1000',
        '1010',
        '1100'
      ]);
    });
  });
});
