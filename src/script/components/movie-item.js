/* eslint-disable no-underscore-dangle */
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './modal-detail';

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const movieID = this._movie.id;
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    this.innerHTML = `
            <style>
                movie-item{
                    margin-top: 5px;
                    margin-bottom: 50px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .movie-card{
                    border-bottom:2px solid #fff;
                    overflow:hidden;
                }
                #mov-card-${movieID}{  
                    background:url(${imageUrl}${this._movie.poster_path});
                    background-size:cover;
                    background-position: center;
                    border-radius:5px;
                    width: 220px;
                    height: 300px;
                    transition-duration: 0.5s;
                }
                
                .overlay-movie-details {
                    background:#0d253f;
                    text-align:center;
                    opacity:0;
                    padding-top: 100%;
                    padding-bottom: 100%;
                    transition-duration: 0.4s;
                    color: white;
                }
                
                #mov-card-${movieID}:hover .overlay-movie-details{
                    opacity: 0.9;
                    cursor: pointer;
                }

                .movie-content h4{
                    text-align: center;
                    width: 200px; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }   
            </style>    
            <div class="col-md-3 movie-content">
                <div class="movie-card" id="mov-card-${movieID}">
                    <div class="overlay-movie-details" data-toggle="modal" data-target="#showDetail${this._movie.id}">
                        <span id="view">${this._movie.original_title}</span>
                    </div>  
                </div>
                <h4 class="border-secondary mt-2">${this._movie.original_title}</h4>
            </div>`;
  }
}

customElements.define('movie-item', MovieItem);
