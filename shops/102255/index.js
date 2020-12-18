import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';
import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"
import pages from "./utils/pages.js"





// document.querySelector('.header_widgets').insertAdjacentHTML('afterbegin', '<div class="header_user"><a id="user" class="position-relative" href="https://store102255.sellavi.com/login/" role="link"><i class="far fa-user"></i></a></div>');


// let newNav = document.querySelector('.nav.sf-menu')
// document.querySelector('section.page-section.latest-section').insertAdjacentHTML('afterbegin', `<div class="container"><div class="newNavTitle">Категории</div>${newNav.outerHTML}</div>`)


// document.querySelector('#home > div > div > section.page-section.latest-section > div:nth-child(2)').insertAdjacentHTML('beforebegin', '<div class="container"><div class="productTitle">Новинки</div></div>');

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIcons = document.querySelector('.soc-icons>.container');
  socIcons.insertAdjacentHTML('afterbegin', `<p class="soc-icons__title">Мы в соц.сетях</p>`)
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ООО"Санитары Столицы"');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ООО"Санитары Столицы"', media);
  req.setTemplate();
}