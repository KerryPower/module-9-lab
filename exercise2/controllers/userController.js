const User = require('../models/users');

// Create a new user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    } catch (err) {throw err};
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {throw err};
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ UserID: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {throw err};
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ UserID: req.params.id }, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {throw err};
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ UserID: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).end();
    } catch (err) {throw err};
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
