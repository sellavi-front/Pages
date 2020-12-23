import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact, options } from './utils/requsites.js';

import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import {navToHeader} from './utils/navToHeader.js';
import {displaySecondInfo} from './utils/bannerSecondInfo.js';

if (document.querySelector('.header-wrapper')) {
  navToHeader();
}

if (document.querySelector('.main-slider.content_center')) {
  displaySecondInfo();
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Орлова Елена Геннадьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Орлова Елена Геннадьевна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Орлова Елена Геннадьевна', document.querySelector("#content > div > div"));
  req.setTemplate();
}

// if (location.href.includes('pay-delivery')) {
//   const req = new Requisites(requsites, 'afterend', 'ИП Орлова Елена Геннадьевна', document.querySelector("#content > div > div"), options);
//   req.setTemplate();
// }
  