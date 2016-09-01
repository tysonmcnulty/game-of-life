var Game = function(grid) {
  if (!valid(grid)) {
    throw new Error("Valid grid not provided");
  };
  this._width = grid[0].length + 2;
  this._height = grid.length + 2;
  this._grid = padGrid.call(this,grid);
};

Object.defineProperty(Game.prototype, 'width', {
  get: function() { return this._width - 2; }
});

Object.defineProperty(Game.prototype, 'height', {
  get: function() { return this._height - 2; }
});

Object.defineProperty(Game.prototype, 'grid', {
  get: function() { return unpadGrid.call(this); }
});

Game.prototype.next = function() {
  var newGrid = [];
  newGrid.push(this._grid[0]);
  for(let i = 1; i < this._height - 1; i++) {
    newGrid.push(updateRow.call(this,i));
  }
  newGrid.push(this._grid[0]);
  this._grid = newGrid;
};

function updateRow(i) {
  var newRow = "0";
  for(let j = 1; j < this._width - 1; j++) {
    newRow += updateCell.call(this,i,j);
  }
  return newRow + "0";
};

function updateCell(i,j) {
  let numOnes = countOnesInSquare.call(this,i,j);
  if (numOnes === 3) return "1";
  else if (numOnes === 4) return this._grid[i][j];
  else return "0";
};

function countOnesInSquare(i,j) {
  return this._grid.slice(i - 1, i + 2)
    .reduce((count,row) => {
      return count + (row.slice(j - 1, j + 2).match(/1/g)||[]).length;
    },0);
};

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
};

function padGrid(grid) {
  var paddedGrid = [];
  var zeros = repeat("0", this._width);
  paddedGrid.push(zeros);
  for (row of grid) {
    paddedGrid.push("0" + row + "0");
  }
  paddedGrid.push(zeros);

  return paddedGrid;
};

function unpadGrid() {
  var unpaddedGrid = [];
  for(row of this._grid.slice(1, -1)) {
    unpaddedGrid.push(row.slice(1, -1));
  }
  return unpaddedGrid;
};

function valid(grid) {
  return Array.isArray(grid);
};

module.exports = Game;
