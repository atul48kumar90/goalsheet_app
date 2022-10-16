const asyncHandler = require('express-async-handler')

const User = require('../model/userModel')

const registerUser = (req, res) => {
    res.status(200).json({message: 'add users'})
}

module.exports = {
    registerUser,
}