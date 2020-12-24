import customBannerLayout from "../layouts/custom-banner-layout.js"

export default class CustomBanner {
  render() {
    if(screen.width <= 768) {
      document.querySelector(".custom_banner").insertAdjacentHTML("afterbegin", customBannerLayout.mobile)
    } else if(screen.width > 768) {
      document.querySelector(".custom_banner").insertAdjacentHTML("afterbegin", customBannerLayout.desktop)
    }
  }
}