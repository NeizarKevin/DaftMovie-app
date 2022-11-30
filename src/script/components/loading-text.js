class LoadingText extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        #loading p {
          margin: 3rem 0;
          text-align: center;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            color: rgb(255,193,7);
          }
        }
      </style>
        <div class="d-flex justify-content-center" id="loading">
            <div class="text-primary" role="status">
                <p>Loading...</p>
            </div>
        </div>
        `;
  }
}

customElements.define('loading-text', LoadingText);
