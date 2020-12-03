const customSection = document.querySelector(".custom_section")
const contentLayoutOne = `
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

let renderCustomSectionAboutCompany = () => {
  customSection.insertAdjacentHTML("afterbegin", contentLayoutOne)
}

export default renderCustomSectionAboutCompany