import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js'

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Лебедь Надежда Юрьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Лебедь Надежда Юрьевна', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Лебедь Надежда Юрьевна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

// if (location.href.includes('pay-delivery')) {
//   const req = new Requisites(
//     requsites,
//     'afterend',
//     'ИП Лебедь Надежда Юрьевна',
//     document.querySelector('#content > div > div'),
//     dataContact,
//   );
//   req.setTemplate();
// }