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

function createGenresArray(array) {
  const newArray = [];
  for (const element of array) {
    GENRES.forEach(item => {
      if (item.id === element) {
        newArray.push(` ${item.name}`);
      }
    });
  }
  return newArray;
}

function cutGenresArray(array) {
  if (array.length > 2) {
    let cutArray = array.slice(0, 2);
    cutArray.push(' ...other');
    return cutArray;
  }
  return array;
}

export function createTrendMovesMarkup({ results }) {
  return results
    .map(({ poster_path, genre_ids, release_date, title, id }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : noimage;

      if (release_date === '') {
        release_date = 'None';
      }
      let genresArray = createGenresArray(genre_ids);
      genresArray = cutGenresArray(genresArray);

      if (genresArray.length === 0) {
        genresArray = 'Other';
      }
      return `<li class="gallery-item">
                    <div class="gallery-container-img" data-id='${id}'>
                    <div class="gallery-card" data-id='${id}'>
                        <img class="gallery-img"  src="${poster}"
                        alt="${title}">
                        </div>
                        <div class="gallery-film" data-id='${id}'>
                        <h3 class="film-title">${title}
                        </h3>
                        <span class="film-genres">${genresArray}</span><span class="film-year"> | ${release_date.slice(
        0,
        4
      )}</span></div>
                    </div>
                </li>`;
    })
    .join('');
}

export function createTrailerMarkup(el, key) {
  const markup = `<a class="trailer-link tube" href="https://www.youtube.com/watch?v=${key}">Trailer</a>`;
  el.insertAdjacentHTML('beforeend', markup);
}