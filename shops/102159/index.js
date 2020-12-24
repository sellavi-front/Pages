import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from './utils/requsites.js';

import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import ColorChoise from '../../components/ColorChoise/ColorChoise.js';


if (document.querySelector('wrapper')) {

  // optimize logo quality
  const logo = document.querySelector('.header-wrapper .logo');
  const src = logo.getAttribute('src');

  let replacedSrc = src.replace(/\/c_fit,g_center,h_176,q_100,w_430\/c_pad,h_176,w_430\/v1608639340/gi, '');

  logo.setAttribute('src', replacedSrc);
  // end optimize logo quality

}


if (document.querySelector('.product-product')) {
  const colorChoise = new ColorChoise();
  colorChoise.render();
}




if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Зюзина Оксана Викторовна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Зюзина Оксана Викторовна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Зюзина Оксана Викторовна', document.querySelector("#content > div > div"));
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Зюзина Оксана Викторовна', document.querySelector("#content > div > div"), dataContact);
  req.setTemplate();
}

