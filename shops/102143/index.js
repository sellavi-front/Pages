import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import Requisites from '../../modules/Requisites/Requisites.js';

import requsites from './utils/requsites.js'
import fixes from '../../fixes/fixes.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';

const icons = {
  cart: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1606402883/Miru/assets/icons/icons8-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0_1_1_gqdqiq.png" alt="cart">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

const obj = {

  linkContent: 'https://res.cloudinary.com/gz-company/image/upload/v1606466129/ThaiCosmetic/Group_73_yqnh52.png',
};

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');

  const bigBanner = new BigBanner(obj);
  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  buttonsInHeader.setTemplate();
  bigBanner.render()
}
if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА', media);
  req.setTemplate();
}
