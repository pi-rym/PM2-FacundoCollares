const carteleraContent = document.getElementById('cartelera-content');

tempData.map(pelicula => {
  
  const movieCard = document.createElement('article');
  movieCard.classList.add('movie-card');

  
  const moviePoster = document.createElement('img');
  moviePoster.src = pelicula.poster;
  moviePoster.alt = pelicula.title;
  moviePoster.classList.add('movie-poster');
  movieCard.appendChild(moviePoster);

  
  const movieTitle = document.createElement('h3');
  movieTitle.textContent = pelicula.title;
  movieTitle.classList.add('movie-title');
  movieCard.appendChild(movieTitle);

  
  const movieYear = document.createElement('p');
  movieYear.textContent = pelicula.year;
  movieYear.classList.add('movie-year');
  movieCard.appendChild(movieYear);

  
  const movieDirector = document.createElement('p');
  movieDirector.innerHTML = `<strong>Director:</strong> ${pelicula.director}`;
  movieDirector.classList.add('movie-director');
  movieCard.appendChild(movieDirector);

  
  const movieDuration = document.createElement('p');
  movieDuration.innerHTML = `<strong>Duración:</strong> ${pelicula.duration}`;
  movieDuration.classList.add('movie-duration');
  movieCard.appendChild(movieDuration);

  
  const movieRate = document.createElement('p');
  movieRate.innerHTML = `<strong>Rating:</strong> ${pelicula.rate}`;
  movieRate.classList.add('movie-rate');
  movieCard.appendChild(movieRate);

  
  const movieGenre = document.createElement('p');
  movieGenre.innerHTML = `<strong>Géneros:</strong> ${pelicula.genre.join(', ')}`;
  movieGenre.classList.add('movie-genre');
  movieCard.appendChild(movieGenre);

  
  carteleraContent.appendChild(movieCard);
});
