/* eslint-disable no-underscore-dangle */
import './movie-item';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;

      this.appendChild(movieItemElement);

      const detailElement = document.createElement('modal-detail');
      detailElement.movie = movie;
      this.append(detailElement);
    });
  }

  renderError(message) {
    this.innerHTML += `<h3 class="text-center text-white">${message}</h3>`;
  }
}

customElements.define('movie-list', MovieList);
