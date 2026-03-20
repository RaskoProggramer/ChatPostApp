const express = require("express");
const router = express.Router();
const {Likes} = require('../models');
const {validateToken} = require('../middlewares/AuthMiddlewares');

router.post("/", validateToken, async (req, res) => {
    const {PostId} = req.body;
    const UserId = req.user.id;

    Likes.findOne({ where: {PostId: PostId, UserId: UserId}}).then((like) => {
        if(!like){
            Likes.create({PostId: PostId, UserId: UserId}).then(() => {
                res.json({liked: true});
            });
        } else {
            Likes.destroy({ where: {PostId: PostId, UserId: UserId}}).then(() => {
                res.json({liked: false});
            });
        }
    });
});

module.exports = router;