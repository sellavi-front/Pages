import images from "../../images/images.js";
let renderBanner = () => {
  let customBanner = document.querySelector(".custom_banner")
  let imgDesktop = `<div class='container-fluid'><img class="banner__descktop" src="${images.bannerDesktop}" alt="banner-desktop"/></div>`
  let imgMobile = `<div class='container-fluid'><img class="banner__mobile" src="${images.bannerMobile}" alt="banner-mobile"/></div>`
  if(screen.width <= 768) {
    customBanner.insertAdjacentHTML('afterbegin', imgMobile)
  } else {
    customBanner.insertAdjacentHTML('afterbegin', imgDesktop)
  }
}

export default renderBanner