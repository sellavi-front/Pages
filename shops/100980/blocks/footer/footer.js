const footerLayout = `
  <div class="footer__container">
      <div class="footer__container__data">
          <div class="footer__container__data__column">
              <div class="footer__container__data__column__item">
              <img class="footer__img" src="https://coospir.github.io/Pages/shops/100980/media/Vectoremail.png" alt="email" />
                  <h6>zakaz@tradequip.ru</h6>
              </div>
              <div class="footer__container__data__column__item">
              <img class="footer__img" src="https://coospir.github.io/Pages/shops/100980/media/wa-footer.png" alt="phone" />
                  <h6>+7 (495) 989-98-28</h6>
              </div>
          </div>
          <div class="footer__container__data__column">
              <div class="footer__container__data__column__item">
              <img class="footer__img" src="https://coospir.github.io/Pages/shops/100980/media/VectorBW.png" alt="email" />
                  <h6>Город столиц Пресненская набережная д.8 ст.1, <br>Пн-Сб: с 9:30 до 19:00</h6>
              </div>
          </div>
          <img class="footer__logo" src="https://coospir.github.io/Pages/shops/100980/media/Groupfooter.png" alt="footer" />
      </div>
  </div>
`
const footerMenuLayout = `
  <div class="menu__footer">
      <a href="/about-company/">О компании</a>
      <a href="/delivery/">Доставка, оплата и возврат</a>
      <a href="/complex/">Комплексное оснащение</a>
      <a href="/solutions/">Готовые решения</a>
  </div>
`


let renderFooter = () => {
  document.querySelector(".footer>.footer-widgets>.container>.row").remove()
  document.querySelector(".footer>.footer-widgets>.container").insertAdjacentHTML("afterbegin", footerLayout)
  document.querySelector(".footer>.footer-widgets>.container").insertAdjacentHTML("beforeend", footerMenuLayout)
}

export default renderFooter
