const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);
router.get('/', commentController.getComments);
router.get('/post/:postId', commentController.getCommentsByPost);
router.delete('/:id', commentController.deleteComment);

module.exports = router;
