const express = require("express");
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');
const {validateToken} = require('../middlewares/AuthMiddlewares');

router.post("/", async (req, res) => {
    try{
        const {username, password} = req.body;
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                username: username,
                password: hash
            });
            res.json("success registering");
        });
    }catch (e){
        console.log("error creating comment " + e);
    }
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({ where: {username: username}});

    if(!user) return res.json({error : "User Doesn't Exist"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) return res.json({error: "Wrong Password And Username combination"});

        const accessToken = sign({username: user.username, id: user.id}, "TopSecret");

        return res.json({token: accessToken, username: user.username, id: user.id});
    });
});

router.get('/auth', validateToken, async (req, res) => {
    return res.json(req.user);
})

router.get('/basicInfo/:id', async (req, res) =>{
    const {id} = req.params;

    const basicInfo = await Users.findByPk(id, {
        attributes: {
            exclude : ['password']
        },
    });
    res.json(basicInfo);
})

router.put('/changepassword', validateToken, async (req, res) => {
    const {currentPassword, newPassword} = req.body;
    const user = await Users.findOne({ where: {username: req.user.username}});

    if(!user) return res.json({error : "User Doesn't Exist"});

    bcrypt.compare(currentPassword, user.password).then((match) => {
        if(!match) return res.json({error: "Current password is incorrect"});

        bcrypt.hash(newPassword, 10).then( (hash) => {
            Users.update({password: hash}, { where: {username: req.user.username}});
            res.json("Password updated successfully");
        });
    });
});

module.exports = router;