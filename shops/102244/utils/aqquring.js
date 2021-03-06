import Requisites from '../../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './requsites.js'
import '../../../fixes/js/FooterCopy/FooterCopy.js';
import '../../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Арутюнян Армен Вагаршакович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Арутюнян Армен Вагаршакович', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Арутюнян Армен Вагаршакович',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Арутюнян Армен Вагаршакович',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}