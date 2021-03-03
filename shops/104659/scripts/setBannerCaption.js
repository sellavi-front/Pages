const link = document.querySelector("#banner0 > div > div > div.owl-item.owl-fade-out > div > div > div > div > div > div > p > a").getAttribute('href')

const setBannerCaption = () => {
  return `
  <div class="caption-content">
    <img src="" alt="logo">
    <h3 class="caption-subtitle text-center">
      Магазин натуральной косметики. Фитопрепараты и витаминные комплексы с доставкой по всей России.
    </h3>
    <p class="caption-text">
      <a class="btn btn-theme" href="${link}" role="link">Подробнее</a>
    </p>
  </div>
  `
};

export default setBannerCaption;
