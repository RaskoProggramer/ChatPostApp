const express = require("express");
const router = express.Router();
const {Posts, Likes} = require('../models');
const {validateToken} = require("../middlewares/AuthMiddlewares");

router.get("/", validateToken, async (req, res) => {
    try{
        const allPosts = await Posts.findAll({
            include: [Likes]
        });
        const liked = await Likes.findAll({where: {UserId: req.user.id}});
        res.json({allPosts, liked});
    } catch (e){
        console.log("error fetching all post "+e)
    }
});

router.get('/ById/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const post = await Posts.findByPk(id);
        res.json(post);
    } catch (error) {
        console.log('Error fetching post by Id '+error)
    }
})

router.post("/", validateToken, async (req, res) => {
    try{
        const post = req.body;
        post.username = req.user.username;
        await Posts.create(post);
        res.json(post);
    }catch (e){
        console.log("error creating post " + e);
    }
    
})

router.delete("/:postId", validateToken, async (req, res) => {
    const postId = req.params.postId;
    await Posts.destroy({
        where: {
            id: postId,
        }
    });
    res.json("Post Deleted");
});

module.exports = router;