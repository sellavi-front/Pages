import Requisites from '../../modules/Requisites/Requisites.js';
import '../../components/PictureCategories/PictureCategories.js'
import { requsites, dataContact } from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
// import '../../fixes/js/TranslateFix/TranslateFix.js'
// import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js'
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/HeaderTypeThree/HeaderTypeThree.js';
import {GridImgWithQuote,data} from './utils/photoTemplate.js';

import './pages/for-business/for-business.js'

if (document.querySelector('.common-home')) {
  new BigBanner('https://res.cloudinary.com/gz-company/image/upload/v1609859584/Group_276_2_otlany.png').render()

  const logo = document.querySelector('header .logo img');
  logo.setAttribute('src', 'https://res.cloudinary.com/depgheppz/image/upload/v1610377451/Group_1_ux60qc.png');

  const cstmSection = document.querySelector('.wrapper > .content-area');
  cstmSection.insertAdjacentHTML('beforeend', new GridImgWithQuote(data).render());
}

if (document.querySelector('.wrapper')) {
  document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a").textContent = '';
  const burger = document.createElement('img').setAttribute('src', './images/burger.svg');
  document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a").append(`<img src="./images/burger.svg">`)
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Скотарева Наталия Анатольевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Скотарева Наталия Анатольевна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Скотарева Наталия Анатольевна', document.querySelector("#content > div > div"));
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Скотарева Наталия Анатольевна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}