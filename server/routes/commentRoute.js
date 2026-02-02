const express = require("express");
const router = express.Router();
const {Comments} = require('../models');

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

router.post("/", async (req, res) => {
    try{
        const comment = await Comments.create(req.body);
        res.json(comment);
    }catch (e){
        console.log("error creating comment " + e);
    }
    
})

module.exports = router;