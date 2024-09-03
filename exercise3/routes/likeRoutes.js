const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.likeController.getLikes(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.likeController.getLikesById(req, res);
})

router.post('/', (req, res) => {
    Controllers.likeController.createLike(req, res);
})

router.update('/:id', (req, res) => {
    Controllers.likeController.updateLike(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.likeController.deleteLike(req, res);
})
module.exports = router;