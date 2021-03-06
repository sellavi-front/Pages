import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from './utils/requsites.js';

import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import ColorChoise from '../../components/ColorChoise/ColorChoise.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js'
import '../../components/DarkMode/DarkMode.js';
import contactData from './utils/contactData.js'

if (document.querySelector('.wrapper')) {
  // optimize logo quality
  const logo = document.querySelector('.header-wrapper .logo img');
  const src = logo.getAttribute('src');

  let replacedSrc = src.replace(
    /\/c_fit,g_center,h_176,q_100,w_430\/c_pad,h_176,w_430\/v1608639340/gi,
    '',
  );

  logo.setAttribute('src', replacedSrc);
  // end optimize logo quality

  const socIcons = document.querySelector('.social-icons > li > a');

  socIcons.textContent = '';
  socIcons.insertAdjacentHTML(
    'beforeend',
    `<img src="https://res.cloudinary.com/gz-company/image/upload/v1608811788/icons8-instagram_1_vtwnvk.svg">`,
  );

  const termUse = document.querySelectorAll('.footer_content_wrapper >ul>li>a');

  termUse.forEach((el) => {
    if (el.textContent.toLowerCase() === 'условия обслуживания') {
      el.closest('li').remove();
    }
  });
}

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
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
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Зюзина Оксана Викторовна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Зюзина Оксана Викторовна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}


if (location.origin) {
  document.querySelector('body').classList.add('dark-mode')
}