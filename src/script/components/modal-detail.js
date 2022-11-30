/* eslint-disable no-underscore-dangle */
class ModalDetail extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .modal-content {
            background-image:
            linear-gradient(to bottom, #0d253f, #343a40);
            background-repeat: no-repeat;
            background-size: cover;
        }
        </style>

            <div class="modal fade" id="showDetail${this._movie.id}" tabindex="-1" role="dialog" aria-labelledby="movieTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h5 class="modal-title" id="movieTitle">${this._movie.title}</h5>
                        </div>

                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-5">
                                    <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" class="rounded img-thumbnail" alt="${this._movie.title} Poster">
                                </div>

                                <div class="col-7">
                                    <p><b>Release Date</b><br>
                                    ${this._movie.release_date}</p>

                                    <p><b>Popularity</b><br>
                                    ${this._movie.popularity}</p>

                                    <p><b>Vote</b><br>
                                    ${this._movie.vote_count} / ${this._movie.vote_average}</p>

                                    <p><b>Original Language</b><br>
                                    ${this._movie.original_language}</p>
                                </div>

                            </div>

                            <p><b>Overview</b><br>
                            ${this._movie.overview}</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define('modal-detail', ModalDetail);
