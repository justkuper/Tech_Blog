// const express = require('express');
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// * COMMENT on blog
router.post('/', withAuth, async (req, res) => {
    try {
        const { comment, blog_Id } = req.body;

        const newComment = await Comment.create({
            comment: comment,
            blog_Id: blog_Id,
            user_Id: req.session.user_Id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;