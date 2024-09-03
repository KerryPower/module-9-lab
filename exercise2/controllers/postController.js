const Post = require('../models/posts');
const Like = require('../models/likes');
const User = require('../models/users');
const Comment = require('../models/comments');

// Create a new post
const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {throw err};
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {throw err};
};

// Get a post by ID with populated user and comments, and total likes
const getPostById = async (req, res) => {
    try {
        const post = await Post.findOne({ PostID: req.params.id }).exec();
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const user = await User.findOne({ UserID: post.UserID }).exec();
        const comments = await Comment.find({ PostID: post.PostID }).exec();
        const likeCount = await Like.countDocuments({ PostID: post.PostID }).exec();

        res.status(200).json({
            ...post.toObject(),
            user,
            comments,
            likeCount
        });
    } catch (err) {throw err};
};

// Get all posts by a User
const getPostsByUser = async (req, res) => {
    const userId = req.params.userId 
        try {
            const posts = await Post.find({ UserID: userId });
            res.status(200).json(posts);
        } catch (err) {throw err};
    };

// Update a post by ID
const updatePost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({ PostID: req.params.id }, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {throw err};
};

// Delete a post by ID
const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ PostID: req.params.id });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(204).end();
    } catch (err) {throw err};
};

module.exports = {
    getPosts,
    getPostById,
    getPostsByUser,
    createPost,
    updatePost,
    deletePost
}