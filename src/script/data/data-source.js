/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-shadow */
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=9bade6c97ee43f0cc2aebdb113bb5484';

const path = {
  nowPlaying: 'movie/now_playing',
  popular: 'movie/popular',
  upcoming: 'movie/upcoming',
  trending: 'trending/movie/week',
  topRated: 'movie/top_rated',
  search: 'search/multi',
};

class DataSource {
  static getList(path) {
    return fetch(`${BASE_URL}${path}${API_KEY}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.results) {
          return Promise.resolve(responseJSON.results);
        }
      });
  }

  static search(keyword) {
    return fetch(`${BASE_URL}${path.search}${API_KEY}&query=${keyword}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.results) {
          return Promise.resolve(responseJSON.results);
        }
        return Promise.reject(`${keyword} is not found!`);
      });
  }
}

export { path, DataSource };
