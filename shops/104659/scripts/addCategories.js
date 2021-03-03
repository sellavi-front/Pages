const isHiddenBtn = () => {
  return Array.from(document.querySelector(".homefeatured_category > div > div > div:nth-child(1) > div > div > a > div > div > div > span").classList)
}

const setData = (data) => {
  return data.map((item) => {
    return `
    <div class="col-md-6 mt-4">
    <div class="thumbnail no-border no-padding thumbnail-banner size-1x3">
      <div class="media">
        <a
          class="media-link"
          href="${item.link}"
          role="link"
        >
          <picture class="img-bg">
            <img
              src="${item.img}"
              alt="${item.title}"
            />
          </picture>
          <div class="caption">
            <div class="caption-wrapper div-table">
              <div class="caption-inner div-cell">
                <h2 class="caption-title"><span>${item.title}</span></h2>
                <span class="${isHiddenBtn().join(' ')}">Подробнее</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

    `;
  });
};

const addCategories = (data) => {
  document
    .querySelector('.homefeatured_category > div > div')
    .insertAdjacentHTML('beforeend', setData(data).join(''));
};

export default addCategories;
