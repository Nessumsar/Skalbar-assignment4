const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = "mkthemligt"

router.post('/login', function(req, res){
    const credentials ={
        username:'Lukas',
        password:'Lukas'
    }

    if (req.body.username == credentials.username.trim() && req.body.password == credentials.password.trim()) {
        res.status(200)
        .json(
            {status:'success', 
                token:jwt.sign(
                    {name:'Lukas', age:'7 Eons'}, secret), redirect:'game'});
    }else{
        res.status(403)
        .json({status:'failure'})
    }
});


module.exports = router;