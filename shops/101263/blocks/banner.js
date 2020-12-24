export default class Banner {
  updateImgCategories() {
    if(window.screen.width >= 575) {
      const imgCat = document.querySelectorAll(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>.img-fluid")
      imgCat.forEach(cat => {
        const src = cat.getAttribute('src');
        let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
        cat.setAttribute('src', replacedSrc);
      })
      document.querySelector(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source").setAttribute('srcset', 'https://cdn.sellavi.com/image/upload/v1608731970/ru/clients/101263/a6badf471eb3c898e4899515a3c0fda8d28aa081.jpg')
    } else {
      const imgCat = document.querySelectorAll(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>.img-fluid")
      imgCat.forEach(cat => {
        const src = cat.getAttribute('src');
        let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
        cat.setAttribute('src', replacedSrc);
      })
      document.querySelector(".content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source").setAttribute('srcset', '      https://cdn.sellavi.com/image/upload/q_auto:420/v1608731984/ru/clients/101263/5ab4a1a11b389c4dc868d48c69c86948e1ed0050.jpg\n')
    }

  }
}