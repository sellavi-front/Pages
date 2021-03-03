const link = document
  .querySelector(
    '#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > p > a',
  )
  .getAttribute('href');

  const setBannerCaption = (img) => {
    const cont = document
    .querySelector('#banner0 > div > div > div:nth-child(2) > div.item > div > div > div > div');
    cont.textContent = '';

    cont.insertAdjacentHTML(
      'beforeend',
      `
  <div class="caption-content">
    <img src="${img}" alt="logo">
    <h3 class="caption-subtitle text-center">
      Магазин натуральной косметики. Фитопрепараты и витаминные комплексы с доставкой по всей России.
    </h3>
    <p class="caption-text">
      <a class="btn btn-theme" href="${link}" role="link">Подробнее</a>
    </p>
  </div>
  `,
    );
};

export default setBannerCaption;
