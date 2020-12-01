import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class VideoBanner {
  constructor(container, target, ...obj) {
    this.obj = obj;
    this.container = container;
    this.target = target;
    console.log(this.obj);
  }

  setBanner() {
    return `
      <div class="video-banner">
        <video autoplay="" loop="" muted="">
          <source src="${this.obj.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>`
  }

  setCaption() {
    return `
      <div class="banner-caption">
        <h1 class="banner-caption__title">${this.obj.caption}</h1>
      </div>
    `
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