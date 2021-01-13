let bannerLayout = `
  <div class="banner__layout_container">
    <div class="banner__row">
        <div class="banner__column">
            <div class="banner__title">
                <h1>Натуральная косметика</h1>
                <h1>"ORGANIC STORIES"</h1>
            </div>
            <p class="banner__description">Коллекция средств по уходу за волосами, телом и лицом без силиконов, сульфатов и парабенов</p>
            <p class="banner__phone">+7(915) 094-06-19</p>
            <div class="banner__social">
                <div class="social__item">
                    <a href="https://www.instagram.com/_organic_stories_/" target="_blank"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727375/sellavi/102169/instt.svg" alt="social" /></a>
                </div>

                <div class="social__item">
                    <a target="_blank" href="https://wa.me/79150940619?text=Здравствуйте!%20Заинтересовала%20Ваша%20продукция."><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727336/sellavi/102169/wwa.svg" alt="social" /></a>
                </div>

                <div class="social__item">
                    <a target="_blank" href="https://vk.com/organicstories"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727297/sellavi/102169/vk.svg" alt="social" /></a>
                </div>
            </div>
        </div>
    </div>
  </div>
`

let renderHomeBanner = () => {
  document.querySelector(".custom_banner").insertAdjacentHTML("afterbegin", bannerLayout)
}

export default renderHomeBanner