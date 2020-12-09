let bannerLayout = `
  <div class="banner__layout_container">
    <div class="banner__row">
        <div class="banner__column">
            <h1>Натуральная косметика
            "ORGANIC STORIES"</h1>
            <p class="banner__description">Коллекция средств по уходу за волосами, телом и лицом без силиконов, сульфатов и парабенов</p>
        </div>
    </div>
    <div class="banner__row">
        <div class="banner__column">
            <p class="banner__phone">+7(915) 094-06-19</p>
            <div class="banner__social">

            </div>
        </div>
    </div>
  </div>
`

let renderHomeBanner = () => {
  document.querySelector(".custom_banner").insertAdjacentHTML("afterbegin", bannerLayout)
}

export default renderHomeBanner