import images from "../../images/images";
let renderBanner = () => {
  let customBanner = document.querySelector(".custom_banner")
  let imgDesktop = `<div class='container-fluid'><img src="${images.bannerDesktop}"</div>`
  let imgMobile = `<div class='container-fluid'><img src="${images.bannerMobile}"</div>`
  if(screen.width <= 768) {
    customBanner.insertAdjacentHTML('afterbegin', imgMobile)
  } else {
    customBanner.insertAdjacentHTML('afterbegin', imgDesktop)
  }
}

export default renderBanner