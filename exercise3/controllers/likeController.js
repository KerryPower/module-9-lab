"use strict";
const Models = require("../models");

// Get all Likes
const getLikes = async (req, res) => {
    try {
        const likes = await Models.likes.findAll();
        res.status(200).json({ result: 200, Likes: likes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Likes' });
    }
};

// Get Like by Id
const getLikeById = async (req, res) => {
    try { 
        const likeId = req.params.id;
        const like = await Models.likes.findOne( { where: { LikeID: likeId }});
        res.status(200).json({ result: 200, Like: like });
    } catch (err) { 
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Like' })
    }
 }


// Create a Like
const createLike = async (req, res) => {
    try {
        const like = await Models.likes.create(req.body);
        res.status(200).json({ result: 200, NewLike: like });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to create a new Like' });
    }
};

// Update a Like 
const updateLike = async (req, res) => {
    try {
        const likeId = req.params.id;
        const updatedData = req.body;
        await Models.likes.update(updatedData, { where: { LikeID: likeId } });
        const updatedLike = await Models.likes.findOne({ where: { LikeID: likeId } });
        res.status(200).json({ result: 200, message: 'Like updated successfully', UpdatedLike: updatedLike });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to update the Like' });
    }
};


// Delete a Like
const deleteLike = async (req, res) => {
    try {
        const likeId = req.params.id;
        const likeToDelete = await Models.likes.findOne({ where: { LikeID: likeId } });
        await Models.Likes.destroy({ where: { LikeID: LikeId } });
        res.status(200).json({ result: 200, message: 'Like deleted successfully', DeletedLike: likeToDelete });

    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to delete the requested Like' });
    }
};

module.exports = {
    getLikes,
    getLikeById,
    createLike,
    updateLike,
    deleteLike
};