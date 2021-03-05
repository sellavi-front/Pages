import Requisites from '../../modules/Requisites/Requisites.js'
import {requsites} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js'
import './blocks/header/header.js'
import './blocks/banner/banner.js'
import resetSizeBanner from "./blocks/banner/banner.js";
import renderContactsInCustomSection from "./blocks/custom-section/contacts/contacts.js";
import addClassNameListener from "./utils/addEventListener.js"


/*document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a").addEventListener('click', () => {
  console.log("Clicked burger")

  document.querySelector(".mobile_side_nav").classList.add("nav-closed")
  document.querySelector("body").classList.remove("overflow-hidden")
})*/

// Catalog remove
document.querySelector(".sf-menu>li:nth-child(2)").remove()



addClassNameListener("body", () => {
  document.querySelector('body').classList.remove('overflow-hidden')
})

if(document.querySelector(".common-home")) {
  resetSizeBanner()
  renderContactsInCustomSection()

  document.querySelector(".custom_banner").insertAdjacentHTML("afterend", `
      


      <div class="container cat_block">
        <div class="categories_block">

            <div class="cat_item">
                <a href="https://multimanic.ru/multiblade/">
                  <div class="cat-name">
                    MULTIBLADE
                  </div>
                  <div class="cat-a">
                    Смотреть все
                  </div>
                </a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multicream-1/">
                  <div class="cat-name">
                    MULTICREAM
                  </div>
                  <div class="cat-a">
                    Смотреть все
                  </div>
                </a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multidez/">
                  <div class="cat-name">
                    MULTIDEZ
                  </div>
                  <div class="cat-a">
                    Смотреть все
                  </div>
                </a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multigialuron/">
                  <div class="cat-name">
                    MULTIGIALURON
                  </div>
                  <div class="cat-a">
                    Смотреть все
                  </div>
                </a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multinailstick/">
                  <div class="cat-name">
                    MULTINAILSTICK
                  </div>
                  <div class="cat-a">
                    Смотреть все
                  </div>
                </a>
            </div>

        </div>
      </div>
    `)
  if(window.screen.width < 480) {

    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612513742/sellavi/103094/Group_286_1_hqpgt7.jpg" alt="desktop"/>
  `)
  } else {
    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612513512/sellavi/103094/Group_289_vv7gcx.jpg" alt="desktop"/>
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

if (document.querySelector('.product-product')) {
  document.querySelector('.btn.btn-theme.btn-cart.btn-icon-left.d-none').classList = 'btn btn-theme btn-cart btn-icon-left';
}


if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div > div > div > div > div > div > div > p > a').innerHTML = 'Подробнее'
}




// <div class="container cat_block">
//         <div class="categories_block">

//             <div class="cat_item">
//                 <a href="https://multimanic.ru/multidez/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350658/sellavi/103094/Frame_318_1_k2fd4i.jpg" alt="category" /></a>
//             </div>

//             <div class="cat_item">
//                 <a href="https://multimanic.ru/multinailstick/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350685/sellavi/103094/Frame_320_znutxc.jpg" alt="category" /></a>
//             </div>

//             <div class="cat_item">
//                 <a href="https://multimanic.ru/multiblade/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350624/sellavi/103094/Frame_316_1_skvz21.jpg" alt="category" /></a>
//             </div>

//             <div class="cat_item">
//                 <a href="https://multimanic.ru/multigialuron/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350674/sellavi/103094/Frame_319_ij1lbd.jpg" alt="category" /></a>
//             </div>

//             <div class="cat_item">
//                 <a href="https://multimanic.ru/multicream-1/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350640/sellavi/103094/Frame_317_1_nmqnvi.jpg" alt="category" /></a>
//             </div>

//         </div>
//       </div>