import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import contactData from './utils/contactData.js'

// import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js'
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();

  // reset cut image in categories
  const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
  imgCat.forEach(cat => {
    const src = cat.getAttribute('src');

    let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');

    cat.setAttribute('src', replacedSrc);
  })
  // rend reset cit img
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Харламова Зоя Николаевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', document.querySelector("#content > div > div"));
  req.setTemplate();
}



// import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
// import imgArr from "./utils/images.js"
// import BigBanner from '../../modules/BigBanner/BigBanner.js'
// import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
// //import "../../fixes/fixes.js";

// let customBanner = document.querySelector(".custom_banner")
// let customSection = document.querySelector(".custom_section")

// const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
// const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

// const buttonsInHeader = new ButtonListInHeader(headerWrapper);
// buttonsInHeader.setTemplate();
// hideCart.remove();

// if(window.location.pathname === '/' || window.location.pathname === '/?from_admin') {
//   let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
//   let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customBanner, "afterend")
//   categories.render()

//   const objBanner = {
//     title: 'Wigstyle',
//     link: '#',
//     linkContent: 'Подробнее'
//   };

//   const bigBanner = new BigBanner(objBanner, 'https://images.unsplash.com/photo-1565357419076-6acd4a10094e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
//   bigBanner.render();
// }

// if(window.location.pathname === '/contact/') {
//   document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(3) > div").setAttribute("class", "media-body")
// }
