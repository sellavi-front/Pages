import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';

document.querySelector('.header-cart.sticky').insertAdjacentHTML('beforebegin', '<div class="button__list_elem"><a id="wishlist" class="position-relative" href="https://store102255.sellavi.com/login/" role="link"><i class="far fa-heart"></i></a></div>');

if (document.querySelector('.common-home')) {
  document.querySelector('.caption-subtitle .position-relative').insertAdjacentHTML('afterend', '<span class="second-title-text">Заголовок 2 Заголовок 2 Заголовок 2</span>')
  document.querySelector('.caption-subtitle .second-title-text').insertAdjacentHTML('afterend', '<div class="button-in-banner">Подробнее</div>')
}

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > h3 > span').insertAdjacentHTML('afterend', '<span class="second-title-text2">Заголовок 2 Заголовок 2 Заголовок 2</span>')
  document.querySelector('.caption-subtitle .second-title-text2').insertAdjacentHTML('afterend', '<div class="button-in-banner2">Подробнее</div>')
}

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}
// if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
//   const footerContainer = document.querySelector('.footer-widgets>div');

//   new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

//   const socIcons = document.querySelector('.soc-icons>.container');
//   socIcons.insertAdjacentHTML('afterbegin', `<p class="soc-icons__title">Мы в соц.сетях</p>`)
// }

if (document.querySelector('.wrapper')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}

if (document.querySelector('.product-category')) {
  document.querySelector('#content').insertAdjacentHTML('beforebegin', '<div class="pre-product-title"><div class="container"><span id="preTitle">Новинки</span></div></div>');
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

