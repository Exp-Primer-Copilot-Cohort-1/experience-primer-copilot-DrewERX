// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Add comment
router.post('/add', commentController.addComment);

// Delete comment
router.post('/delete', commentController.deleteComment);

// Edit comment
router.post('/edit', commentController.editComment);

// Get comments
router.get('/get', commentController.getComments);

module.exports = router;