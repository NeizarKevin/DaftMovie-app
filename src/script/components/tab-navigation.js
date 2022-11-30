/* eslint-disable no-underscore-dangle */
class TabNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('.nav .nav-item .nav-link.active').id;
  }

  render() {
    this.innerHTML = `
        <div class="container mt-2 mb-2">
            <ul class="nav nav-pills justify-content-center pb-4">
                <li class="nav-item">
                    <a class="nav-link active" id="nowPlaying">Now Playing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="upcoming">Upcoming</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="popular">Popular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="trending">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="topRated">Top Rated</a>
                </li>
            </ul>
        </div>`;

    const tabItems = this.querySelectorAll(
      '.nav .nav-item .nav-link',
    );

    tabItems.forEach((tabItem) => {
      tabItem.addEventListener('click', (event) => {
        const selectedItems = this.querySelectorAll(
          '.active',
        );

        if (selectedItems.length > 0) {
          selectedItems[0].classList.remove('active');
        }

        event.target.classList.add('active');
        this.addEventListener('click', this._clickEvent);
      });
    });
  }
}

customElements.define('tab-navigation', TabNavigation);
