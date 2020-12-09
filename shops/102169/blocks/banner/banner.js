let bannerLayout = `
  <div class="banner__layout_container">
    <div class="banner__row">
        <div class="banner__column">
            <h1>Натуральная косметика
            "ORGANIC STORIES"</h1>
            <p class="banner__description">Коллекция средств по уходу за волосами, телом и лицом без силиконов, сульфатов и парабенов</p>
            <p class="banner__phone">+7(915) 094-06-19</p>
            <div class="banner__social">
                <div class="social__item">
                    <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516742/sellavi/102169/Group_t9ghfm.png" alt="social" />
                </div>

                <div class="social__item">
                    <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516752/sellavi/102169/Group_3_pgihcu.png" alt="social" />
                </div>

                <div class="social__item">
                    <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516743/sellavi/102169/Group_1_o2dhef.png" alt="social" />
                </div>

                <div class="social__item">
                    <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607516743/sellavi/102169/Group_2_dagjbp.png" alt="social" />
                </div>
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