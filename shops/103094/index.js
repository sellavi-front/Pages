import Requisites from '../../modules/Requisites/Requisites.js'
import {requsites} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import './blocks/header/header.js'
import './blocks/banner/banner.js'
import resetSizeBanner from "./blocks/banner/banner.js";

if(document.querySelector(".common-home")) {
  resetSizeBanner()
  if(window.screen.width < 480) {
    document.querySelector(".custom_banner").insertAdjacentHTML("afterend", `
      <div class="container-fluid cat_block">
        <div class="categories_block">
            <div class="item">
                <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612191257/sellavi/103094/Component_3_pmy4eg.jpg" alt="category" />
            </div>

            <div class="item">
                <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612191263/sellavi/103094/Component_4_lp4j5s.jpg" alt="category" />
            </div>

            <div class="item">
                <img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612191370/sellavi/103094/Component_5_bxcmpa.jpg" alt="category" />
            </div>
        </div>
      </div>
    `)
    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612190016/sellavi/103094/Component_2_1_tyluzl.jpg" alt="desktop"/>
  `)
  } else {
    document.querySelector(".custom_banner").insertAdjacentHTML("afterend", `
    <img class="second_banner" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612190016/sellavi/103094/Group_279_xeh3jr.jpg" alt="desktop"/>
  `)
  }

}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Кучма Виктория Геннадьевна');
  req.setTemplate();
}

if (location.href.includes('/contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Кучма Виктория Геннадьевна', media);
  req.setTemplate();
}

if (location.href.includes('/policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Кучма Виктория Геннадьевна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

