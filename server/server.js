const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

//Routers
const postRoutes = require('./routes/postRoute');
app.use("/posts", postRoutes);

db.sequelize.sync().then( () => {
    app.listen(3001, () =>{
        console.log('server running on port http://localhost/3001/')
    });
});

