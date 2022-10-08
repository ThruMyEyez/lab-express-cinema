const mongoose = require("mongoose");
//instantiate new schema
const movieSchema = new mongoose.Schema({
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
