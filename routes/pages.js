const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/game', function(req, res){
    res.sendFile(path.resolve()+'/public/game.html');
});


module.exports = router;