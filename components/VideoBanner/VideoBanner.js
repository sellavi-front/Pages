import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class VideoBanner {
  constructor(container, target, ...obj) {
    this.obj = obj;
    this.container = container;
    this.target = target;
    console.log(this.obj);
  }

  setBanner() {
    console.log(this.obj);
    return this.obj.map(item => {
      return `
        <video preload="yes" width='100%' height='100%' src="${item.src}" autoplay muted="muted" loop playsinline poster="https://res.cloudinary.com/gz-company/image/upload/v1608630243/%D0%9A%D0%BE%D1%80%D1%81%D0%B5%D1%82%D1%8B/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2020-12-22_%D0%B2_12.43.43_yorxxv.png">
            Your browser does not support the video tag.
        </video>
      `
  });
}

  setCaption() {
    console.log(this.obj);
    return this.obj.map((item) => {
      return `
      <div class="banner-caption">
        <h1 class="banner-caption__title">${item.caption}</h1>
      </div>
    `});
  }

  setTemplate() {
    return `
      <div class="video-banner">
        ${this.setBanner()}
        ${this.setCaption()}
      </div>
      `
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}