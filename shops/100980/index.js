import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';


window.onload = () => {
  /* Deleting burger */
  //document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky").remove()

  /* Setting logo */
  let logo = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo")
  logo.classList.add("navbar__block")
  let navbar = `
    <a class="navbar_item" href="#">Все товары</a>
    <a class="navbar_item" href="#">О компании</a>
    <a class="navbar_item" href="#">Доставка</a>
    <a class="navbar_item" href="#">Оплата и возврат</a>
    <a class="navbar_item" href="#">Комплексное оснащение</a>
    <a class="navbar_item" href="#">Готовые решения</a>
    <a class="navbar_item" href="#">Контакты</a>
  `
  logo.insertAdjacentHTML("beforeend", navbar)
  let banner = `
  <div class="banner__container">
    <div class="banner__item">
      <div class="banner__column">
        <div class="banner__column__item">
          <h4>Проектируем, оснащаем оборудованием и запускаем кулинарные пространства</h4>
          <div class="info__block">
              <div class="info__block__item">

              </div>
          </div>
        </div>
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
</div>`
}
