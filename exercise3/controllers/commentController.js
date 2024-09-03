"use strict";
const Models = require("../models");

// Get all Comments
const getComments = async (req, res) => {
    try {
        const comments = await Models.comments.findAll();
        res.status(200).json({ result: 200, Comments: comments });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Comments' });
    }
};

// Get Comment by Id
const getCommentById = async (req, res) => {
    try { 
        const commentId = req.params.id;
        const comment = await Models.comments.findOne( { where: { CommentID: commentId }});
        res.status(200).json({ result: 200, Comment: comment });
    } catch (err) { 
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Comment' })
    }
 }

// Create a Comment
const createComment = async (req, res) => {
    try {
        const comment = await Models.comments.create(req.body);
        res.status(200).json({ result: 200, NewComment: comment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to create a new Comment' });
    }
};

// Update a Comment
const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const updatedData = req.body;
        await Models.comments.update(updatedData, { where: { CommentID: commentId } });
        const updatedComment = await Models.comments.findOne({ where: { CommentID: commentId } });
        res.status(200).json({ result: 200, message: 'Comment updated successfully', UpdatedComment: updatedComment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to update the Comment' });
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const commentToDelete = await Models.comments.findOne({ where: { CommentID: commentId } });
        await Models.Comments.destroy({ where: { CommentID: CommentId } });
        res.status(200).json({ result: 200, message: 'Comment deleted successfully', DeletedComment: commentToDelete });

    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to delete the requested Comment' });
    }
};

module.exports = {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
};