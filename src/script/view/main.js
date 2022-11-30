/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import '../components/movie-list';
import { DataSource, path } from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('app-bar');
  const navigation = document.querySelector('tab-navigation');
  const movieListElement = document.querySelector('movie-list');
  const loading = document.getElementById('loading');

  const showLoading = () => {
    movieListElement.style.display = 'none';
    loading.innerHTML = '<loading-text></loading-text>';
  };

  const clearTabSelected = () => {
    navigation.querySelectorAll('.nav .nav-item .nav-link').forEach((item) => {
      item.classList.remove('active');
    });
  };

  const getList = (path) => {
    showLoading();
    DataSource.getList(path)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const onSearchAction = () => {
    showLoading();
    clearTabSelected();
    DataSource.search(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    loading.innerHTML = '';
    movieListElement.style.display = 'flex';
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const onTabSelect = () => {
    searchElement.querySelector('#searchBox').value = '';
    const category = navigation.value;
    switch (category) {
      case 'nowPlaying': getList(path.nowPlaying); break;
      case 'trending': getList(path.trending); break;
      case 'popular': getList(path.popular); break;
      case 'topRated': getList(path.topRated); break;
      case 'upcoming': getList(path.upcoming); break;
    }
  };

  navigation.clickEvent = onTabSelect;
  searchElement.clickEvent = onSearchAction;

  getList(path.nowPlaying);
};

export default main;
