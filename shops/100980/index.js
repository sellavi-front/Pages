import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';


window.onload = () => {
  /* Deleting burger */
  //document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky").remove()

  /* Setting logo */
  let logo = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo")
  let customBanner = document.querySelector(".custom_banner")
  let customSection = document.querySelector(".custom_section")
  logo.classList.add("navbar__block")
  /*let navbar = `
    <a class="navbar_item" href="#">Все товары</a>
    <a class="navbar_item" href="#">О компании</a>
    <a class="navbar_item" href="#">Доставка</a>
    <a class="navbar_item" href="#">Оплата и возврат</a>
    <a class="navbar_item" href="#">Комплексное оснащение</a>
    <a class="navbar_item" href="#">Готовые решения</a>
    <a class="navbar_item" href="#">Контакты</a>
  `*/
  //logo.insertAdjacentHTML("beforeend", navbar)
  let bannerLayout = `
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
    </div>`
  let contentLayoutOne = `
    <div class="content__layout__container">
        <div class="container">
        <div class="content__layout__container__item">
          <img src="https://coospir.github.io/Pages/shops/100980/media/Group.png" />
        </div>
        <div class="content__layout__container__item">
          <div class="content__layout__container__item__description">
          <h1>Компания Tradequip</h1>
          <p>Эксперт по проектированию, оснащению оборудованием и запуску кулинарных пространств.</p>

          <p>Уже более 3 лет мы помогаем открывать фудкорты, рестораны, кафе, бары, пекарни и пищевые производства.</p>

          <p>В портфеле компании есть разработанные технологами готовые комплекты оборудования и профессионального инвентаря для любой кухни мира.</p>

          <p>Наш продукт это созданные по всем стандартам и качествам кулинарные пространства с уникальным дизайном и собственным фирменным стилем.</p>
          </div>
        </div>
      </div>
    </div>
  `

  /* Delete footer content */
  document.querySelector(".footer>.footer-widgets>.container>.row").remove()

  /* Copy footer-meta */
  let oldFooterMeta = document.querySelector(".footer>.footer-meta")
  let newFooterMeta = oldFooterMeta.cloneNode(true)
  document.querySelector(".footer>.footer-widgets>.container").insertAdjacentHTML("beforeend", newFooterMeta.outerHTML)

  customBanner.insertAdjacentHTML("afterbegin", bannerLayout)
  customSection.insertAdjacentHTML("afterbegin", contentLayoutOne)
}
