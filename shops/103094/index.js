import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import contactData from './utils/contactData.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import { dataContact } from '../102159/utils/requsites.js';

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

if (location.href.includes('/pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Кучма Виктория Геннадьевна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}