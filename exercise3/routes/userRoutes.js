const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getUsers(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.userController.getUsersById(req, res);
})

router.post('/', (req, res) => {
    Controllers.userController.createUser(req, res);
})

router.update('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
})
module.exports = router;