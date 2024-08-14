const InitialPositions = [
  // Dark pieces (formerly "white")
  { id: 32, symbol: '♜', name: 'rook', enemy: true, alive: true, position_x: 0, position_y: 0 },
  { id: 31, symbol: '♞', name: 'knight', enemy: true, alive: true, position_x: 1, position_y: 0 },
  { id: 30, symbol: '♝', name: 'bishop', enemy: true, alive: true, position_x: 2, position_y: 0 },
  { id: 29, symbol: '♛', name: 'queen', enemy: true, alive: true, position_x: 3, position_y: 0 },
  { id: 28, symbol: '♚', name: 'king', enemy: true, alive: true, position_x: 4, position_y: 0 },
  { id: 27, symbol: '♝', name: 'bishop', enemy: true, alive: true, position_x: 5, position_y: 0 },
  { id: 26, symbol: '♞', name: 'knight', enemy: true, alive: true, position_x: 6, position_y: 0 },
  { id: 25, symbol: '♜', name: 'rook', enemy: true, alive: true, position_x: 7, position_y: 0 },
  { id: 24, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 0, position_y: 1 },
  { id: 23, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 1, position_y: 1 },
  { id: 22, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 2, position_y: 1 },
  { id: 21, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 3, position_y: 1 },
  { id: 20, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 4, position_y: 1 },
  { id: 19, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 5, position_y: 1 },
  { id: 18, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 6, position_y: 1 },
  { id: 17, symbol: '♟', name: 'pawn', enemy: true, alive: true, position_x: 7, position_y: 1 },

  // Light pieces (formerly "black")
  { id: 8, symbol: '♖', name: 'rook', enemy: false, alive: true, position_x: 0, position_y: 7 },
  { id: 7, symbol: '♘', name: 'knight', enemy: false, alive: true, position_x: 1, position_y: 7 },
  { id: 6, symbol: '♗', name: 'bishop', enemy: false, alive: true, position_x: 2, position_y: 7 },
  { id: 5, symbol: '♕', name: 'queen', enemy: false, alive: true, position_x: 3, position_y: 7 },
  { id: 4, symbol: '♔', name: 'king', enemy: false, alive: true, position_x: 4, position_y: 7 },
  { id: 3, symbol: '♗', name: 'bishop', enemy: false, alive: true, position_x: 5, position_y: 7 },
  { id: 2, symbol: '♘', name: 'knight', enemy: false, alive: true, position_x: 6, position_y: 7 },
  { id: 1, symbol: '♖', name: 'rook', enemy: false, alive: true, position_x: 7, position_y: 7 },
  { id: 16, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 0, position_y: 6 },
  { id: 15, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 1, position_y: 6 },
  { id: 14, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 2, position_y: 6 },
  { id: 13, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 3, position_y: 6 },
  { id: 12, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 4, position_y: 6 },
  { id: 11, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 5, position_y: 6 },
  { id: 10, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 6, position_y: 6 },
  { id: 9, symbol: '♙', name: 'pawn', enemy: false, alive: true, position_x: 7, position_y: 6 },
];

export default InitialPositions;
