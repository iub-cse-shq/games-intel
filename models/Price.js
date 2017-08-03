var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PriceSchema = {

  gameID: {
    type: Schema.ObjectId,
    ref: 'Game'
  },
  
  storeID: {
    type: Schema.ObjectId,
    ref: 'Store'
  },
  
  price:{
    type:Number,
    default: 0,
    trim: true,
    // required: ''
  },
  
  created: {
    type: Date,
    default: Date.now
  }
}

var Price = mongoose.model('Price', PriceSchema, 'prices');
module.exports = Price;
