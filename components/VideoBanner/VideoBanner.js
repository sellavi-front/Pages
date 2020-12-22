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
        <video preload="yes" autoplay muted loop  playsinline>
          <source src="${item.src}"/>
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