import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'OOO "НС-Безопасность"');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'OOO "НС-Безопасность"', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'OOO "НС-Безопасность"',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'OOO "НС-Безопасность"',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}