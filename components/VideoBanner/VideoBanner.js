import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class VideoBanner {
  constructor(src, container, target) {
    this.src = src;
    this.container = container;
    this.target = target;
  }

  setTemplate() {
    return `
      <div class="video-banner">
        <video autoplay="" loop="" muted="">
          <source src="${this.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>`
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