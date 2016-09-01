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

  describe('getters', () => {
    it('can get the game grid', function() {
      expect(game.grid).toEqual(glider);
    });

    it('can get the width', function() {
      expect(game.width).toEqual(4);
    });

    it('can get the height', function() {
      expect(game.height).toEqual(4);
    });
  });

  describe('#next', () => {
    it('advances each cell in the grid by one generation', () => {
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
