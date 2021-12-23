const API_KEY = process.env.API_KEY;

const requests = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}`
  },
  top: {
    title: 'Top',
    url: `/movie/top_rated?api_key=${API_KEY}`
  },
  action: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  comedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`

  },
  horror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  romance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  }
}

export default requests