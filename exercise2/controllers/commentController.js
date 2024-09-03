const Comment = require('../models/comments');

// Create a new comment
const createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {throw err};
};

// Get all comments
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {throw err};
};

// Get comments by PostID
const getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ PostID: req.params.postId });
        res.status(200).json(comments);
    } catch (err) {throw err};
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findOneAndDelete({ CommentID: req.params.id });
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(204).end();
    } catch (err) {throw err};
};

module.exports = {
    createComment,
    getComments,
    getCommentsByPost,
    deleteComment
}