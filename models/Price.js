var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PriceSchema = {

  game: {
    type: Schema.ObjectId,
    ref: 'Game'
  },
  
  store: {
    type: Schema.ObjectId,
    ref: 'Store'
  },
  
  price:{
    type:String,
    default: '',
    trim: true,
    required: ''
  },
  
  created: {
    type: Date,
    default: Date.now
  }
}

var Price = mongoose.model('Price', PriceSchema, 'prices');
module.exports = Price;
