import FormBasic from "../../../../components/FormBasic/FormBasic.js"
import sender from "./feedback-form.js"

let customSectionBannerLayout = `
  <img class="img__on__banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607518292/sellavi/102169/Component_1_1_pdu4be.png" alt="img"/>
  <div class="section__banner_container">
  </div>
  <div class="section__banner_column">
      <div class="section__banner_row">
        <div class="section__banner_col">
            <img class="photo__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608726207/sellavi/102169/Component_1_3_mxi5fo.png" alt="img" />
        </div>
        <div class="section__banner_col description__section">
            <p class="section__banner_title">Нашу косметику можно приобрести, как в нашем интернет магазине, так и в других городах России.</p>
            <p class="distributors">Представляем наших дистрибьюторов.</p>
            <ul class="distributors__list">
                <li class="distributor">г. Санкт-Петербург, Сеть Аптек "Аптека.Хелп". <a href="https://apteka.help/"><img class="cstm_photo" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608725196/sellavi/102169/globe_u4ra42.png" alt="site"/></a></li>
                <li class="distributor">г. Томск, <a href="https://instagram.com/eco_cosmetique/"><img class="cstm_photo" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607940084/sellavi/102169/87390_gg5in2.png" alt="site"/></a></li>
                <li class="distributor">г. Екатеринбург, ул. Ильича 31, Тел. +7(909)011-12-30. <a href="https://www.instagram.com/ekbrose/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607940084/sellavi/102169/87390_gg5in2.png" class="cstm_photo" alt="site"/></a>, <a href="https://ekbrose.ru/"><img class="cstm_photo" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608725196/sellavi/102169/globe_u4ra42.png" alt="site"/></a></li>
                <li class="distributor">г. Иваново, ул. Калинина 17, Тел. 89106679837. <a href="https://www.instagram.com/nota37/"><img class="cstm_photo" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1607940084/sellavi/102169/87390_gg5in2.png" alt="site"/></a></li>
            </ul>
            <p class="marketplaces__container">Наша продукция на маркет плейсах</p>
            <p class="distributor"><a href="https://www.wildberries.ru/brands/os" target="_blank"><img class="disphoto__custom_banner"  src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724531/sellavi/102169/wild.svg" alt="img"/></a></p>
            <p class="distributor"><a href="https://www.ozon.ru/search/?from_global=true&text=organic+stories" target="_blank"><img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724566/sellavi/102169/ozon.svg" alt="img"/></a></p>
            <p class="distributor"><a href="https://saterno.ru/organic-stories" target="_blank"><img class="disphoto__custom_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608724696/sellavi/102169/unnamed_1_k0ni2l.svg" alt="img"/></a></p>
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