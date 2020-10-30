const template = `
<div class="grid-banner">
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
      <h1 class="grid-banner__text-container_title">Детская одежда</h1>
      <p class="grid-banner__text-container_subtitle">для девочек</p>
      <button class="grid-banner__text-container_discount">
        <h3 class="grid-banner__text-container_discount_title">Скидка 30%</h3>
        <span class="grid-banner__text-container_discount_subtitle">на всю одежду по промокоду SALE30</span>
      </button>
    </div>
  </div>
</div>
<div class="grid-banner">
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
</div>
<div class="grid-banner">
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
</div>
<div class="grid-banner">
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
</div>
<div class="grid-banner">
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
  <div class="grid-banner__item">
    <div class="grid-banner__text-container">
    </div>
    <img src="https://res.cloudinary.com/gz-company/image/upload/v1604059787/Interno/1_cotuxs.png" alt="" class="grid-banner__item_img">
  </div>
</div>`;

export default class GridBannerGalery {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
  }

  render() {
    console.log('this.template ---- ', this.template);
    console.log('Template ---- ', template);
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
