const customBanner = document.querySelector(".custom_banner")
const bannerLayout = `
  <div class="banner__container">
      <div class="banner__item">
        <div class="banner__column">
          <div class="banner__column__item">
            <h4>Проектируем, оснащаем оборудованием и запускаем кулинарные пространства</h4>
          </div>
          <ul class="contact__container">
            <li class="contact__container__item">
              <img src="https://coospir.github.io/Pages/shops/100980/media/icons8-whatsapp%201.png" />
              <h6>+7(495) 989-98-28</h6>
            </li>
            <li class="contact__container__item">
              <img src="https://coospir.github.io/Pages/shops/100980/media/Vector.png" />
              <h6>Город столиц Пресненская набережная д.8 ст.1, <br>Пн-Сб: с 9:30 до 19:00</h6>
            </li>
          </ul>
        </div>
      </div>
      <div class="banner__item">
        <div class="banner__column">
          <div class="banner__column__item">
            <form class="banner__submit__form">
              <h6>Оставьте заявку прямо сейчас</h6>
              <input class="banner_submit__form__input" type="text" placeholder="Ваше имя">
              <input class="banner_submit__form__input" type="text" placeholder="Ваш телефон">
              <input class="banner_submit__form__input" type="text" placeholder="Ваш E-Mail">
              <p>Получите предложение и детальный план реализации проекта</p>
              <button type="button" class="banner__submit__form__btn">Получить предложение</button>
            </form>
          </div>
        </div>
      </div>
  </div>
`
let renderBanner = () => {
  customBanner.insertAdjacentHTML("afterbegin", bannerLayout)
}

export default renderBanner