"use strict";
const Models = require("../models");

// Get all Users
const getUsers = async (req, res) => {
    try {
        const users = await Models.users.findAll();
        res.status(200).json({ result: 200, Users: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find Users' });
    }
};

// Get User by Id
const getUserById = async (req, res) => {
    try { 
        const userId = req.params.id;
        const user = await Models.users.findOne( { where: { UserID: userId }});
        res.status(200).json({ result: 200, User: user });
    } catch (err) { 
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to find User' })
    }
 }


// Create a User
const createUser = async (req, res) => {
    try {
        const user = await Models.users.create(req.body);
        res.status(200).json({ result: 200, NewUser: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to create a new User' });
    }
};

// Update a User
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        await Models.users.update(updatedData, { where: { UserID: userId } });
        const updatedUser = await Models.users.findOne({ where: { UserID: userId } });
        res.status(200).json({ result: 200, message: 'User updated successfully', UpdatedUser: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to update the User' });
    }
};


// Delete a User
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userToDelete = await Models.Users.findOne({ where: { UserID: userId } });
        await Models.users.destroy({ where: { UserID: userId } });
        res.status(200).json({ result: 200, message: 'User deleted successfully', DeletedUser: userToDelete });

    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, message: 'Failed to delete the requested User' });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};