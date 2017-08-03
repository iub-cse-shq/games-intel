var mongoose = require('mongoose');
var Price = require('./../models/Price.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Price.find(function(err, data) {
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

module.exports.listByGenre = function(req, res) {
  var price = new Price(req.body);
  price.user = req.user;
  price.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

exports.priceByID = function(req, res, next, id) {
	Price.findById(id).populate('user', 'email').exec(function(err, price) {
		if (err) return next(err);
		if (!price) return next(new Error('Failed to load price ' + id));
		req.price = price;
		next();
	});
};

// exports.new = function(req, res) {
//     res.render('./../public/views/game/create.ejs', {
//       user: req.user || null,
//       request: req
//     });
// };

// module.exports.list = function(req, res) {
//   Game.find(function(err, data) {
//     if (err) {
//       return res.status(400).send({

//   				message: errorHandler.getErrorMessage(err)
//   			});
//     } else {
//       console.log("api called");

//       res.status(200).send(data);
//     }
//   });
// };

// module.exports.list = function(req, res) {
//   Game.find(function(err, data) {
//     if (err) {
//       return res.status(400).send({

//   				message: errorHandler.getErrorMessage(err)
//   			});
//     } else {
//       console.log("api called");

//       res.status(200).send(data);
//     }
//   });
// };

// module.exports.create = function(req, res) {
//   var game = new Game(req.body);
//   game.user = req.user;
//   game.save(function(err, data) {
//     if (err) {
//       return res.status(400).send({

//   				message: errorHandler.getErrorMessage(err)
//   			});
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };

// module.exports.read = function(req, res) {
//   res.json(req.game);
// };


// exports.delete = function(req, res) {
// 	var game = req.game;
// 	game.remove(function(err) {
// 		if (err) {
// 			return res.status(400).send();
// 		} else {
// 			res.json(game);
// 		}
// 	});
// };


// module.exports.update = function(req, res) {
//   var game = req.game;

//   	game = _.extend(game, req.body);

//   	game.save(function(err) {
//   		if (err) {
//   			return res.status(400).send();
//   		} else {
//   			res.json(game);
//   		}
//   	});
// };

// module.exports.listByGenre = function(req, res){
//   // console.log(req.params);
//   // console.log(req.params.genre);
//   Game.find({genre:req.params.genre},function(err, data) {
//     if (err) {
//       return res.status(400).send({

//   				message: errorHandler.getErrorMessage(err)
//   			});
//     } else {
//       console.log("api called");

//       res.render('./../public/views/game/viewGames.ejs', {
//     		user: req.user || null,
//     		request: req,
//     		games: data
//     	});
//     }
//   });
// };

// exports.gameByID = function(req, res, next, id) {
// 	Game.findById(id).populate('user', 'email').exec(function(err, game) {
// 		if (err) return next(err);
// 		if (!game) return next(new Error('Failed to load game ' + id));
// 		req.game = game;
// 		next();
// 	});
// };