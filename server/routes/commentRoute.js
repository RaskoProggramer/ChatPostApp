const express = require("express");
const router = express.Router();
const {Comments} = require('../models');
const {validateToken} = require('../middlewares/AuthMiddlewares')

router.get('/:postId', async (req, res) =>{
    const postId = req.params.postId;
    try {
        const comment = await Comments.findAll({ where: {
            PostId : postId,
        }
        });
        res.json(comment);
    } catch (error) {
        console.log('Error fetching comment by Id '+error)
    }
})

router.post("/", validateToken, async (req, res) => {
    try{
        const comment = req.body;
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }
        comment.username = req.user.username;
        
        const newComment = await Comments.create(comment);
        res.json(newComment);
    }catch (e){
        console.log("error creating comment " + e);
    }
    
})

module.exports = router;