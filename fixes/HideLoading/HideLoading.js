export default class HideLoading {
  constructor() {
    this.loading = document.readyState == 'interactive' || document.readyState == 'loading';
    this.html = document.querySelector('html');
  }

  setLoading() {
    if (document.readyState == 'interactive' || document.readyState == 'loading') {
      this.html.style.opacity = '0';
    }
    document.addEventListener('DOMContentLoaded', () => {
      this.html.style.opacity = '1';
    });
  }
}

const loading = new HideLoading();

loading.setLoading();
