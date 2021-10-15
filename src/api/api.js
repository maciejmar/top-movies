
// const getApiUrl = (limit = 100) =>     `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;
// //const getApiUrl = () => `https://itunes.apple.com/us/rss/topmovies/100/json`;
// export default function fetchHits() {
//   return fetch(getApiUrl())
//            .then(response => response.json())
// }

const getApiUrl = (limit = 100) =>     `https://itunes.apple.com/us/rss/topmovies/limit=${limit}/json`;
//const getApiUrl = () => `https://itunes.apple.com/us/rss/topmovies/100/json`;
export default function fetchHits() {
  return fetch(getApiUrl())
           .then(response => response.json())
}

//`https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;

// export default function fetchMovies() {
//   return fetch('https://itunes.apple.com/us/rss/topmovies/100/json' )
//            .then(response => response.json())
// }


//process.env.FETCH_DATA_ENDPOINT.toString())