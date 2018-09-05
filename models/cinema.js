const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titlesOfFilms = function () {
  return this.films.map( function(film) {
    return film.title;
  } )
};

Cinema.prototype.findByTitle = function (title) {
  let found = this.films.find( function(film) {
    return film.title === title;
  } )
  return found;
};

Cinema.prototype.genreFilter = function (genre) {
  let found = this.films.filter( film => film.genre === genre );
  return found;
};
module.exports = Cinema;
