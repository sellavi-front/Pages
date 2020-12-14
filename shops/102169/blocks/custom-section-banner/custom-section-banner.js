import FormBasic from "../../../../components/FormBasic/FormBasic.js"
import sender from "./feedback-form.js"

let customSectionBannerLayout = `
  <img class="img__on__banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607518292/sellavi/102169/Component_1_1_pdu4be.png" alt="img"/>
  <div class="section__banner_container">
  </div>
  <div class="section__banner_column">
      <div class="section__banner_row">
        <div class="section__banner_col">
            <img class="photo__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607670448/sellavi/102169/Component_2_2_fz7n1z.png" alt="img" />
        </div>
        <div class="section__banner_col description__section">
            <p class="section__banner_title">Нашу косметику можно приобрести, как в нашем интернет магазине, так и в других городах России.</p>
            <p class="distributors">Представляем наших дистрибьюторов.</p>
            <ul class="distributors__list">
                <li class="distributor">г. Санкт-Петербург, Сеть Аптек "Аптека.Хелп"</li>
                <li class="distributor">г. Томск instagram.com/eco_cosmetique/</li>
                <li class="distributor">г. Екатеринбург, ул. Ильича 31, Тел. +7(909)011-12-30</li>
                <li class="distributor">г. Иваново, ул. Калинина 17, Тел. 89106679837</li>
            </ul>
            <b><p class="marketplaces__container">Наша продукция на маркет плейсах</p>
            <img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607518334/sellavi/102169/Component_1_2_wk6aux.png" alt="img" />
            <p class="wanna__be__distributor">Хотите и вы стать нашим дистрибьютором? Присоединяйтесь!</p>
            <p class="wanna__be__distributor">Отправляйте запрос на почту zakaz@organic-stories.ru</p></b>
        </div>
      </div>
  </div>
`



const senderData = [
  {
    title: 'Станьте дилером в своем городе',
    content: 'Оставьте контакты и получите лучшие оптовые условия',
  }
]



let renderSectionBanner = () => {
  document.querySelector(".custom_section").insertAdjacentHTML("afterbegin", customSectionBannerLayout)
  let form = new FormBasic(document.querySelector(".custom_section"), "beforeend", senderData)
  form.render()
  sender()
}

export default renderSectionBanner