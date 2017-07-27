var mongoose = require('mongoose');
var Game = require('./../models/Game.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.new = function(req, res) {
     res.render('./../public/views/game/create.ejs', {
       user: req.user || null,
       request: req
     });
};

module.exports.list = function(req, res) {
  Game.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var game = new Game(req.body);
  game.user = req.user;
  game.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.game);
};


exports.delete = function(req, res) {
	var game = req.game;
	game.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(game);
		}
	});
};


module.exports.update = function(req, res) {
  var game = req.game;

  	game = _.extend(game, req.body);

  	game.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(game);
  		}
  	});
};

exports.gameByID = function(req, res, next, id) {
	Game.findById(id).populate('user', 'email').exec(function(err, game) {
		if (err) return next(err);
		if (!game) return next(new Error('Failed to load game ' + id));
		req.game = game;
		next();
	});
};