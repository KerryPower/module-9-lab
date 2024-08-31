"use strict";
const Models = require("../models");

// Finds all users in the DB and sends an array as a response
const getUsers = (req, res) => {
    Models.users.findAll()
        .then(data => {
            res.status(200).json({ result: 200, data: data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Uses JSON from request body to create a new user in the DB
const createUser = (req, res) => {
    const data = req.body;
    Models.users.create(data)
        .then(user => {
            res.status(201).json({ result: 200, data: user });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Deletes a user based on the ID provided in request params
const deleteUser = (req, res) => {
    const userId = req.params.id;
    Models.users.destroy({ where: { UserID: userId } })
        .then(deletedCount => {
            if (deletedCount > 0) {
                res.status(200).json({ result: 200, message: 'User deleted successfully' });
            } else {
                res.status(404).json({ result: 404, message: 'User not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

module.exports = {
    getUsers,
    createUser,
    deleteUser
};
