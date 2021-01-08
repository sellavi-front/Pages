import images from "../../images/images.js"

let renderBanner = () => {
  let customBanner = document.querySelector(".custom_banner")
  let imgDesktop = `<img class="banner__desktop centered" src="${images.bannerDesktop}" alt="banner-desktop"/>`
  let imgMobile = `<img class="banner__mobile centered" src="${images.bannerMobile}" alt="banner-mobile"/>`
  if(screen.width <= 768) {
    customBanner.insertAdjacentHTML('afterbegin', imgMobile)
  } else {
    customBanner.insertAdjacentHTML('afterbegin', imgDesktop)
  }
}

export default renderBanner