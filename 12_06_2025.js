const movies = [
  {
    title: "Breaking Bad",
    type: "series",
    year: "2008–2013",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"
  },
  {
    title: "The Good, the Bad and the Ugly",
    type: "movie",
    year: "1966",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg"
  },
  {
    title: "Bad Boys",
    type: "movie",
    year: "1995",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_poster.jpg"
  },
  {
    title: "Bad Boys II",
    type: "movie",
    year: "2003",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_II_poster.jpg"
  }
];

// Elements
const searchBar = document.getElementById('searchBar');
const movieList = document.getElementById('movieList');

// Display movies
function displayMovies(filteredMovies) {
  movieList.innerHTML = '';
  filteredMovies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Type: ${movie.type}</p>
      <p>Year: ${movie.year}</p>
    `;
    movieList.appendChild(card);
  });
}

// Initial display
displayMovies(movies);

// Filter on input
searchBar.addEventListener('input', () => {
  const keyword = searchBar.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(keyword)
  );
  displayMovies(filtered);
});
