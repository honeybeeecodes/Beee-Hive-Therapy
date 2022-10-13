

const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


	
const therapistSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String]
});
