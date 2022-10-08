const mongoose = require("mongoose");
//instantiate new schema
const movieSchema = new mongoose.Schema({
  //name: String, required
  //species: String, limted to "dog", "cat", "bunny", required
  //age: Number
  //picture: String
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: [String],
  image: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
