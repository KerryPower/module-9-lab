'use strict'
const users = require('./users')
const posts = require('./posts')
const likes = require('./likes')
const comments = require('./comments')

async function init() {
await users.sync();
await posts.sync();
await likes.sync();
await comments.sync();
};

init();
module.exports = {
users,
posts,
likes,
comments 
};