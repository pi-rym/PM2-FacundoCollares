const jsToHtml = (movie) => {
    const renderCard = document.createElement("div");
    renderCard.classList.add("card");
  
    const title = document.createElement("h2");
    title.classList.add("movieTitle");
    title.innerText = movie.title;
  
    const year = document.createElement("p");
    year.classList.add("movieYear");
    year.innerText = movie.year;
  
    const duration = document.createElement("p");
    duration.classList.add("movieDuration");
    duration.innerText = movie.duration;
  
    const genre = document.createElement("p");
    genre.classList.add = "moviGenre";
    genre.innerText = movie.genre;
  
    const rate = document.createElement("p");
    rate.classList.add = "movieRate";
    rate.innerText = movie.rate;
  
    const img = document.createElement("img");
    img.classList.add = "movieImg";
    img.src = movie.poster;
    img.alt = movie.title;
  
    const button = document.createElement("button");
    button.classList.add = "viewButton";
    button.innerText = "Mirar ahora";
  
    renderCard.appendChild(title);
    renderCard.appendChild(year);
    renderCard.appendChild(duration);
    renderCard.appendChild(genre);
    renderCard.appendChild(rate);
    renderCard.appendChild(img);
    renderCard.appendChild(button);
  
    return renderCard;
  };

  module.exports= {
    jsToHtml
  }