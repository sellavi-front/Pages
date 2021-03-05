const customBanner = document.querySelector(".custom_banner")
const bannerLayout = `
  <div class="banner__container">
      <div class="banner__item">
        <div class="banner__column">
          <div class="banner__column__item">
            <h4>Дизайнерские</h4>
            <h1>Шторы</h1>
            <h1>Покрывала</h1>
            <h1>Подушки</h1>
            <h4>Индивидуального пошива</h4>
          </div>
          <ul class="contact__container">
            <li class="contact__container__item">
              <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614928893/Vector_4_jbygpc.png" />
              <h6>7 905 368-83-03</h6>
            </li>
            <li class="contact__container__item">
              <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614928895/Vector_3_vik8c1.png" />
              <h6>Саратов , ул . Мичурина,  д.182/20,  оф 17</h6>
            </li>
          </ul>
        </div>
      </div>
      <div class="banner__item">
        <div class="banner__column">
          <div class="banner__column__item">
            <form class="banner__submit__form" id="home__form_submit">
              <h6>Оставьте заявку прямо сейчас</h6>
              <input class="banner_submit__form__input" name="home__form_name" type="text" placeholder="Ваше имя" required>
              <input class="banner_submit__form__input" name="home__form_phone" type="text" placeholder="Ваш телефон" required>
              <input class="banner_submit__form__input" name="home__form_email" type="text" placeholder="Ваш E-Mail" required>
              <p>Получите предложение и детальный план реализации проекта</p>
              <button type="button" class="banner__submit__form__btn" id="submit__home_form">Получить предложение</button>
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