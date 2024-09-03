"use strict";
const Models = require("../models");

// Get all Posts
const getPosts = async (req, res) => {
    try {
        const posts = await Models.posts.findAll();
        res.status(200).json({ result: 200, Posts: posts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Posts' });
    }
};

// Get Post by Id
const getPostById = async (req, res) => {
    try { 
        const postId = req.params.id;
        const post = await Models.posts.findOne( { where: { PostID: postId }});
        res.status(200).json({ result: 200, Post: post });
    } catch (err) { 
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Post' })
    }
 }



// Create a Post
const createPost = async (req, res) => {
    try {
        const post = await Models.posts.create(req.body);
        res.status(200).json({ result: 200, NewPost: post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to create a new Post' });
    }
};

// Update a Post
const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedData = req.body;
        await Models.posts.update(updatedData, { where: { PostID: postId } });
        const updatedPost = await Models.posts.findOne({ where: { PostID: postId } });
        res.status(200).json({ result: 200, message: 'Post updated successfully', UpdatedPost: updatedPost });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to update the Post' });
    }
};


// Delete a Post
const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const postToDelete = await Models.posts.findOne({ where: { PostID: postId } });
        await Models.posts.destroy({ where: { PostID: postId } });
        res.status(200).json({ result: 200, message: 'Post deleted successfully', DeletedPost: postToDelete });

    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to delete the requested Post' });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};