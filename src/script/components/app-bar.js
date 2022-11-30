/* eslint-disable no-underscore-dangle */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchBox').value;
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="index.html"><h1><b class="text-primary">Daft</b>Movie📽</h1></a>
                <div class="mt-3 mb-3 search-container">
                    <input class="form-control" type="search" placeholder="Search Movie..." id="searchBox">
                    <button class="btn btn-outline-primary" type="submit" id="searchButton">Search</button>
                </div>
            </div>
        </nav>
        `;

    this.querySelector('#searchButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('app-bar', AppBar);
