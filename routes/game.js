const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Game = require('../models/Game.js');

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.post('/api/games', function(req, res, next){
    Game.create(req.body, function(err, game){
        if(err) return next(err);
        res.json(game);
    });
});

router.get('/api/games', function(req, res, next){
    Game.find(function(err, game){
        if(err) return next(err);
        res.json(game);
    });
});

router.get('/api/games/:id', function(req, res, next){
    console.log("Get is called!");
    Game.findById(req.params.id, function(err, game){
        if(err) return next(err);
        res.json(game);
    });
});

router.put('/api/games/:id', function(req, res, next){
    console.log(req.params.id);
    Game.findByIdAndUpdate(req.params.id, req.body, function(err, game){
        console.log(req.params.id);
        if(err) return next(err);
        res.json(game);
    });
});

router.delete('/api/games/:id', function(req, res, next){
    console.log(req.params.id);
    Game.findByIdAndRemove(req.params.id, req.body, function(err, game){
        console.log(req.params.id);
        if(err) return next(err);
        res.json(game);
    });
});

module.exports = router;