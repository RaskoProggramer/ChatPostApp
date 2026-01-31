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

router.get('/ById/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const post = await Posts.findByPk(id);
        res.json(post);
    } catch (error) {
        console.log('Error fetching post by Id '+error)
    }
})

router.post("/", async (req, res) => {
    try{
        const post = await Posts.create(req.body);
        res.json(post);
    }catch (e){
        console.log("error creating post " + e);
    }
    
})


module.exports = router;