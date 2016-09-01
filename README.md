## Game of Life
Toy implementation of Conway's Game of Life in Node.js

### Installation
Install by cloning the repository.
```
npm install github:tysonmcnulty/game-of-life
```

### Testing
Run the test command inside the package directory.
```
npm test
```

### Usage
```
var Life = require('game-of-life');
var game = new Life.Game(['000', '111', '000']);
console.log(game.grid);

// > ['000', '111', '000']

game.next();
console.log(game.grid);

// > ['010', '010', '010']
```
