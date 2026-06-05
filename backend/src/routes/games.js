const express = require('express');
const router = express.Router();

// Get all games
router.get('/', (req, res) => {
  // TODO: Implement database query
  res.json({
    message: 'Get all games',
    games: []
  });
});

// Get game by ID
router.get('/:id', (req, res) => {
  // TODO: Implement database query
  res.json({
    message: `Get game ${req.params.id}`,
    game: {}
  });
});

// Create new game (admin only)
router.post('/', (req, res) => {
  // TODO: Implement game creation
  res.status(201).json({
    message: 'Game created',
    game: req.body
  });
});

// Update game (admin only)
router.put('/:id', (req, res) => {
  // TODO: Implement game update
  res.json({
    message: `Game ${req.params.id} updated`,
    game: req.body
  });
});

// Delete game (admin only)
router.delete('/:id', (req, res) => {
  // TODO: Implement game deletion
  res.json({
    message: `Game ${req.params.id} deleted`
  });
});

module.exports = router;
