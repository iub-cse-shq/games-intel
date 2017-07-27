var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GameSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },
  
  photo: {
    type: String,
    default: '',
    trim: true
  },

  description: {
    type: String,
    default: '',
    trim: true,
    // required: 'Description required'
    required:''

  },

  rating: {
    type: String,
    default: null,
    required: ''
  },
  
  studio_name: {
    type: String,
    default: '',
    trim: true,
    required: ''
  },
  
  // developer_name: {
  //   type: String,
  //   default: '',
  //   trim: true,
  //   required: ''
  // },
  
  release_date: {
    // type: Date,
    type:String,
    trim:true
  },
  
  genre: {
    type: String,
    default: '',
    required: 'Genre required'
  },
  
  // audience_rating: {
  //   type: Number,
  //   default: null,
  //   required: ''
  // },

  created: {
    type: Date,
    default: Date.now
  }
  
}

var Game = mongoose.model('Game', GameSchema, 'games');
module.exports = Game;
