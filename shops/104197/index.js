import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
//import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';


if (document.querySelector('.wrapper')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {

  /* Remove bootstrap col width seclector */
  const footerWidgetsCol = document.querySelectorAll('.footer-widgets > div > div > div');
  footerWidgetsCol.forEach(el => {
    el.classList.remove('col-md-3');
  })
  /* Add title for soc icons */


  const catergoryBanners = document.querySelector('.homefeatured_category>div');
  if (catergoryBanners) {
    catergoryBanners.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4"><span> Категории </span></h2>`)
  }
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div > section.page-section.latest-section > div > h2 > span').setAttribute('id', 'neww')
  document.querySelector('.custom_banner').insertAdjacentHTML('afterbegin', '<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1611666346/Component_1_lilp3a.png"></img></div>');
}

if (document.querySelector('.common-home')) {
  if (screen.width < 480) {
    document.querySelector('#home > div > div > div.main-slider.content_center > div.custom_banner > div > img').setAttribute('src', 'https://res.cloudinary.com/dtqqfmyqb/image/upload/v1611847670/Component_2_2_ifmjs3.png')
  }
}

if (document.querySelector('.common-home')) {
  if (screen.width < 480) {
    const oldNews = document.querySelector('.page-section.homefeatured_category');
    const newNews = oldNews.cloneNode(true);
    document.querySelector('.page-section.latest-section').insertAdjacentHTML('afterend', newNews.outerHTML);
    oldNews.remove();
  }
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Окутина Марина Юрьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Окутина Марина Юрьевна', media);
  req.setTemplate();
}

//test

if (document.querySelector('.header-wrapper')) {
  document.querySelector('.navigation_black_screen').remove();
}

if (document.querySelector('.header-wrapper')) {
  document.querySelector('#home > div > header > div.header-wrapper > div.container > ul > li.flexy.has_children').insertAdjacentHTML('afterend', '<a href="https://store102015.sellavi.com/#neww">Новинки</a>');
  document.querySelector('#home > div > header > div.header-wrapper > div.container > ul > a').insertAdjacentHTML('afterend', '<a href="tel:+79168018224">+7(916)8018224</a>');
}