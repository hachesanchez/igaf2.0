const express = require("express").Router()

const { findById } = require("../models/User.model")
const User = require('../models/User.model')

// user profile
router.get("user/:id", (req, res, next) => {
    const { id } = req.params
    User
    findById(id)
})
