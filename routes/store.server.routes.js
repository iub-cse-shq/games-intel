module.exports = function(app){

 var stores = require('./../controllers/stores.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

app.route('/api/stores')
    .get(stores.list)
    .post(users.requiresLogin, stores.listByGenre);

app.param('storeId', stores.storeByID);
};



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

//  app.route('/articles/list')
// 	.get(articles.listview);
 
 
//  app.route('/api/games')
// 	.get(games.list)
// 	.post(users.requiresLogin, games.create);

//   app.route('/api/games/:gameId')
// 	.get(games.read)
//   .delete(users.requiresLogin, games.delete);

// 	app.route('/api/games/edit/:gameId')
// 	.get(games.read)
// 	.put(users.requiresLogin, games.update);
	
// app.route('/games/new').get(games.new);
// app.route('/games/all/:genre').get(games.listByGenre);


