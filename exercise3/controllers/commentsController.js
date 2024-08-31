"use strict";
const Models = require("../models");

// Finds all comments in the DB and sends an array as a response
const getComments = (req, res) => {
    Models.comments.findAll()
        .then(data => {
            res.status(200).json({ result: 200, data: data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Uses JSON from request body to create a new comment in the DB
const createComment = (req, res) => {
    const data = req.body;
    Models.comments.create(data)
        .then(comment => {
            res.status(201).json({ result: 200, data: comment });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Deletes a comment based on the ID provided in request params
const deleteComment = (req, res) => {
    const commentId = req.params.id;
    Models.comments.destroy({ where: { CommentID: commentId } })
        .then(deletedCount => {
            if (deletedCount > 0) {
                res.status(200).json({ result: 200, message: 'Comment deleted successfully' });
            } else {
                res.status(404).json({ result: 404, message: 'Comment not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

module.exports = {
    getComments,
    createComment,
    deleteComment
};
