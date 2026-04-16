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

router.get('/ByUserId/:id', async (req, res) =>{
    const {id} = req.params;
    try {
        const listOfPosts = await Posts.findAll({where: {UserId: id}, include: [Likes]});
        res.json(listOfPosts);
    } catch (error) {
        console.log('Error fetching post by User Id '+error)
    }
})

router.post("/", validateToken, async (req, res) => {
    try{
        const post = req.body;
        post.username = req.user.username;
        post.UserId = req.user.id;
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

router.put("/title", validateToken, async (req, res) => {
    const {title, postId} = req.body;
    try {
        await Posts.update({title: title}, {
            where: {
                id: postId,
            }
            
        });
        res.json(title);
    } catch (error) {
        console.log('Error updating post by Id '+error)
    }

});

router.put("/body", validateToken, async (req, res) => {
    const {Text, postId} = req.body;
    try {
        await Posts.update({postText: Text}, {
            where: {
                id: postId,
            }
            
        });
        res.json(Text);
    } catch (error) {
        console.log('Error updating post by Id '+error)
    }

});

module.exports = router;