const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/likes', likeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
