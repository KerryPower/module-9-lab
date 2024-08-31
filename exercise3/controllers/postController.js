"use strict";
const Models = require("../models");

// Finds all posts in the DB and sends array as a response
const getPosts = (req, res) => {
    Models.posts.findAll()
        .then(data => {
            res.status(200).json({ result: 200, data: data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Uses JSON from request body to create a new post in the DB
const createPost = (req, res) => {
    const data = req.body;
    Models.posts.create(data)
        .then(post => {
            res.status(201).json({ result: 200, data: post });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

// Deletes a post based on the ID provided in request params
const deletePost = (req, res) => {
    const postId = req.params.id;
    Models.posts.destroy({ where: { PostID: postId } })
        .then(deletedCount => {
            if (deletedCount > 0) {
                res.status(200).json({ result: 200, message: 'Post deleted successfully' });
            } else {
                res.status(404).json({ result: 404, message: 'Post not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: 500, error: err.message });
        });
};

module.exports = {
    getPosts,
    createPost,
    deletePost
};
