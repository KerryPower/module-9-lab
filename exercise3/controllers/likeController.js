"use strict";
const Models = require("../models");

// Finds all likes in the DB and sends an array as a response
const getLikes = (req, res) => {
    Models.likes.findAll()
        .then(data => {
            res.status(200).json({ result: 200, data: data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Uses JSON from request body to create a new like in the DB
const createLike = (req, res) => {
    const data = req.body;
    Models.likes.create(data)
        .then(like => {
            res.status(201).json({ result: 200, data: like });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Deletes a like based on the ID provided in request params
const deleteLike = (req, res) => {
    const likeId = req.params.id;
    Models.likes.destroy({ where: { LikeID: likeId } })
        .then(deletedCount => {
            if (deletedCount > 0) {
                res.status(200).json({ result: 200, message: 'Like deleted successfully' });
            } else {
                res.status(404).json({ result: 404, message: 'Like not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

module.exports = {
    getLikes,
    createLike,
    deleteLike
};
