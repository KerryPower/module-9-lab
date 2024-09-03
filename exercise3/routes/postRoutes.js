const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.postController.getPosts(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.postController.getPostsById(req, res);
})

router.post('/', (req, res) => {
    Controllers.postController.createPost(req, res);
})

router.update('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res);
})
module.exports = router;