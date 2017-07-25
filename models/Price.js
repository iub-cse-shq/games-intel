var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PriceSchema = {

  game: {
    type: Schema.ObjectId,
    ref: 'Game'
  },
  
  game: {
    type: Schema.ObjectId,
    ref: 'Store'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Price = mongoose.model('Price', PriceSchema, 'prices');
module.exports = Price;
