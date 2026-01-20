const express = require("express")
const router = express.Router()
const {Posts} = require('../models')

router.get("/", async (req, res) => {
    try{
        const allPosts = await Posts.findAll();
        res.json(allPosts);
    } catch (e){
        console.log("error fetching all post "+e)
    }
});

router.post("/", async (req, res) => {
    try{
        const post = Posts.create(req.body);
        res.json(post);
    }catch (e){
        console.log("error creating post " + e);
    }
    
})


module.exports = router;