class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <p class="text-center text-white">Copyright &copy; 2022, Neizar Kevin</p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
