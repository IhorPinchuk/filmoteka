import noimage from '../images/noimage.jpg';
const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export function createLibraryMarkup(results) {
  const genreNames = GENRES.slice(0, 2).map(genre => ` ${genre.name}`);

  if (GENRES.length > 2) {
    genreNames.push('...other');
  }

  return results
    .map(({ poster_path, release_date, title, id }) => {
      const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : noimage;
      if (release_date === '') {
        release_date = 'None';
      }
      return `<li class="gallery-item">
                    <div class="gallery-container-img" data-id='${id}'>
                    <div class="gallery-card" data-id='${id}'>
                        <img class="gallery-img" src="${poster}" alt="${title}">
                        </div>
                        <div class="gallery-film" data-id='${id}'>
                        <h3 class="film-title">${title}
                        </h3>
                        <span class="film-genres">${genreNames}</span><span class="film-year"> | ${release_date.slice(
        0,
        4
      )}</span></div>
                    </div>
                </li>`;
    })
    .join('');
}
