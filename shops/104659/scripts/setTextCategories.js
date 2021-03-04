const setTextCategories = (text) => {
  document.querySelector("#home > div > div.content-area > section.page-section.homefeatured_category > div > div > div:nth-child(1) > div > div > a > div > div > div > h2")
    .insertAdjacentHTML(
      'beforeend',
      `<p class="mt-3">
      Мы бережно собираем решения природы в капсулы.
      </p>`,
    );

    document.querySelector("#home > div > div.content-area > section.page-section.homefeatured_category > div > div > div:nth-child(2) > div > div > a > div > div > div > h2")
    .insertAdjacentHTML(
      'beforeend',
      `<p class="mt-3">
      Залог красоты и здоровья вашей кожи.
      </p>`,
    );
};

export default setTextCategories;
