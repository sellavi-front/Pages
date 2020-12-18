export default class Fixes {
  deleteUnnecessaryClasses() {
    if (document.querySelector('.common-home')) {
      document.querySelector(".main-slider ").remove()
    }
    document.querySelector(".sf-menu>li[data-nav-part='home']").remove()
    document.querySelector(".sf-menu>li[data-nav-part='5764']").remove()
    document.querySelector(".sf-menu>li[data-nav-part='5763']").remove()
    document.querySelector(".sf-menu>li[data-nav-part='5762']").remove()
  }

  updateImgCategories() {
    document.querySelector(".content-area>.page-section>.container>.row").classList.add("categories__block")
    const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
    imgCat.forEach(cat => {
      const src = cat.getAttribute('src');
      let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
      cat.setAttribute('src', replacedSrc);
    })
  }

  insertTitleToCategories() {
    document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(1)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
      .insertAdjacentHTML("afterend",
        `<div class="category__card">
            <small class="count__products">Более 100 товаров</small>
            <a href="/kids/" class="more__category">Смотреть</a>
          </div>`)

    document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(2)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
      .insertAdjacentHTML("afterend",
        `<div class="category__card">
            <small class="count__products">Более 6000 товаров</small>
            <a href="/men/" class="more__category">Смотреть</a>
          </div>`)

    document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(3)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
      .insertAdjacentHTML("afterend",
        `<div class="category__card">
            <small class="count__products">Более 2000 товаров</small>
            <a href="/women/" class="more__category">Смотреть</a>
          </div>`)
  }



}