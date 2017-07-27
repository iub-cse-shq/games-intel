// module.exports = function(app){

//  var articles = require('./../controllers/articles.server.controller.js');
//  var users = require('./../controllers/users.server.controller.js');

// //  app.route('/articles/list')
// // 	.get(articles.listview);
 
 
//  app.route('/api/articles')
// 	.get(articles.list)
// 	.post(users.requiresLogin, articles.create);

//   app.route('/api/articles/:articleId')
// 	.get(articles.read)
//   .delete(users.requiresLogin, articles.delete);

// 	app.route('/api/articles/edit/:articleId')
// 	.get(articles.read)
// 	.put(users.requiresLogin, articles.update);


// app.param('articleId', articles.articleByID);
// };
module.exports = function(app){

 var games = require('./../controllers/games.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

//  app.route('/articles/list')
// 	.get(articles.listview);
 
 
 app.route('/api/games')
	.get(games.list)
	.post(users.requiresLogin, games.create);

  app.route('/api/games/:gameId')
	.get(games.read)
  .delete(users.requiresLogin, games.delete);

	app.route('/api/games/edit/:gameId')
	.get(games.read)
	.put(users.requiresLogin, games.update);
	
app.route('/games/new').get(games.new);


app.param('gameId', games.gameByID);
};
