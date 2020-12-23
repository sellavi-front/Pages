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
                <li class="distributor">г. Санкт-Петербург, Сеть Аптек "Аптека.Хелп". <a href="https://apteka.help/"><b>Сайт</b></a></li>
                <li class="distributor">г. Томск, <a href="https://instagram.com/eco_cosmetique/"><b>Instagram</b></a></li>
                <li class="distributor">г. Екатеринбург, ул. Ильича 31, Тел. +7(909)011-12-30. <a href="https://www.instagram.com/ekbrose/"><b>Instagram</b></a>, <a href="https://ekbrose.ru/"><b>Сайт</b></a></li>
                <li class="distributor">г. Иваново, ул. Калинина 17, Тел. 89106679837. <a href="https://www.instagram.com/nota37/"><b>Instagram</b></a></li>
            </ul>
            <p class="marketplaces__container">Наша продукция на маркет плейсах</p>
            <p class="distributor"><a href="https://www.wildberries.ru/brands/os"><img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724531/sellavi/102169/wild.svg" alt="img"/></a></p>
            <p class="distributor"><a href="https://www.ozon.ru/search/?from_global=true&text=organic+stories"><img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724566/sellavi/102169/ozon.svg" alt="img"/></a></p>
            <p class="distributor"><a href="https://saterno.ru/organic-stories"><img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724696/sellavi/102169/unnamed_1_k0ni2l.svg" alt="img"/></a></p>
            <p class="wanna__be__distributor"><b>Хотите и вы стать нашим дистрибьютором? Присоединяйтесь!</b></p>
            <p class="wanna__be__distributor"><b>Отправляйте запрос на почту zakaz@organic-stories.ru</b></p>
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