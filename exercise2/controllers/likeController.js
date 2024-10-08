const Like = require('../models/likes');

// Create a new like
const createLike = async (req, res) => {
    try {
        const like = new Like(req.body);
        await like.save();
        res.status(201).json(like);
    } catch (err) {throw err};
};

// Get all likes
const getLikes = async (req, res) => {
    try {
        const likes = await Like.find();
        res.status(200).json(likes);
    } catch (err) {throw err};
};

// Get likes by PostID
const getLikesByPost = async (req, res) => {
    try {
        const likes = await Like.find({ PostID: req.params.postId });
        res.status(200).json(likes);
    } catch (err) {throw err};
};

// Delete a like by ID
const deleteLike = async (req, res) => {
    try {
        const like = await Like.findOneAndDelete({ LikeID: req.params.id });
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        res.status(204).end();
    } catch (err) {throw err};
};

module.exports = {
    createLike,
    getLikes,
    getLikesByPost,
    deleteLike
}
