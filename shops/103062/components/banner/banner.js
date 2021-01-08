let renderBanner = () => {
  let customBanner = document.querySelector(".custom_banner")
  let containerFluid = "<div class='container-fluid'></div>"
  customBanner.insertAdjacentHTML('afterbegin', containerFluid)
}

export default renderBanner