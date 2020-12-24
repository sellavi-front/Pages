export default class Banner {
  updateImgCategories() {
    const imgCat = document.querySelectorAll(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>.img-fluid")
    imgCat.forEach(cat => {
      const src = cat.getAttribute('src');
      let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
      cat.setAttribute('src', replacedSrc);
    })

    const imgCat2 = document.querySelectorAll(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source")
    imgCat2.forEach(cat => {
      const src = cat.getAttribute('srcset');
      let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
      cat.setAttribute('src', replacedSrc);
    })
  }
}