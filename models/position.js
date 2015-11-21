var mongoose = require('mongoose');

var positionSchema = new mongoose.Schema({
  position: { type: String},
  user: { type: String},
  created_at: Date,
  updated_at: Date
});

var Position = mongoose.model('Position', positionSchema);

// Make this available to our other files
module.exports = Position;