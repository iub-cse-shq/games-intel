var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = {

  comment: {
    type: String,
    default: '',
    trim: true,
    required: 'Comment required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  
  game: {
    type: Schema.ObjectId,
    ref: 'Game'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Comment = mongoose.model('Comment', CommentSchema, 'comments');
module.exports = Comment;
