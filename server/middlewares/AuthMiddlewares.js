const {verify} = require('jsonwebtoken');
const { route } = require('../routes/usersRoute');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({ error: "User not loged in"});
    try {
        const validToken = verify(accessToken, 'TopSecret');

        if (validToken){
            return next();
        }
    } catch (error) {
        return res.json({error : error})
    }
}

module.exports = {validateToken};