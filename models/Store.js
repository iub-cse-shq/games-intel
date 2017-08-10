var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StoreSchema = {
  
  userID: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Store = mongoose.model('Store', StoreSchema, 'stores');
module.exports = Store;
