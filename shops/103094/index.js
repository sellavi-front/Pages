import Requisites from '../../modules/Requisites/Requisites.js'
import {requsites} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import './blocks/header/header.js'
import './blocks/banner/banner.js'
import resetSizeBanner from "./blocks/banner/banner.js";
import renderContactsInCustomSection from "./blocks/custom-section/contacts/contacts.js";


document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a").addEventListener('click', () => {
  document.querySelector(".mobile_side_nav").classList.remove("nav-opened")
  document.querySelector(".mobile_side_nav").classList.add("nav-closed")
  document.querySelector("body").classList.remove("overflow-hidden")
})

document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(2) > a").innerHTML = `<a href="">Каталог</a>`
if(document.querySelector(".common-home")) {
  resetSizeBanner()
  renderContactsInCustomSection()

  document.querySelector(".custom_banner").insertAdjacentHTML("afterend", `
      <div class="container cat_block">
        <div class="categories_block">
            <div class="cat_item">
                <a href="https://store103094.sellavi.com/care-products/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612254485/sellavi/103094/Frame_316_pdrniy.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://store103094.sellavi.com/multisticks/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612254485/sellavi/103094/Frame_317_gilktb.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://store103094.sellavi.com/consumables/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612254486/sellavi/103094/Frame_318_a6vphy.jpg" alt="category" /></a>
            </div>
        </div>
      </div>
    `)
  if(window.screen.width < 480) {

    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612190016/sellavi/103094/Component_2_1_tyluzl.jpg" alt="desktop"/>
  `)
  } else {
    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612254580/sellavi/103094/Group_279_zaupkq.jpg" alt="desktop"/>
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

