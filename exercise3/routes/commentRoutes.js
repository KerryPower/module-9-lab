const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.commentController.getComments(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.commentController.getCommentsById(req, res);
})

router.post('/', (req, res) => {
    Controllers.commentController.createComment(req, res);
})

router.update('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res);
})
module.exports = router;