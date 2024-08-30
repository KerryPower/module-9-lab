const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/', likeController.createLike);
router.get('/', likeController.getLikes);
router.get('/post/:postId', likeController.getLikesByPost);
router.delete('/:id', likeController.deleteLike);

module.exports = router;
