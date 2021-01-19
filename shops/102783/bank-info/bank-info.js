import Requisites from '../../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'

if (location.href.includes('terms-of-use')) {
  const req = new Requisites(requisites, 'beforeend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requisites, 'afterend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ', media);
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requisites,
    'afterend',
    'ИП "Кучма Виктория Геннадьевна"',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}