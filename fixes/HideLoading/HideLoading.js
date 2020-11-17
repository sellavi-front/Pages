export default class HideLoading {
  constructor() {
    this.loading = document.readyState == 'interactive' || document.readyState == 'loading';
    this.html = document.querySelector('html');
  }

  setLoading() {
    this.loading
      ? (this.html.style.opacity = '0')
      : (window.onload = () => {
          this.html.style.opacity = '1';
        });
  }
}

const loading = new HideLoading();

loading.setLoading();
