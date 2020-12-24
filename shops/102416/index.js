import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact, options } from './utils/requsites.js';

import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import {navToHeader} from './utils/navToHeader.js';
import {displaySecondInfo} from './utils/bannerSecondInfo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import FormBasic from '../../components/FormBasic/FormBasic.js';
import senderData from './utils/senderData.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js';

if (document.querySelector('.common-home')) {
  document.querySelector('.page-section.homefeatured_category').insertAdjacentHTML('beforebegin', '<div class="pre-category-title"><div class="container"><span>Категории</span></div></div>');
}

if (document.querySelector('.header-wrapper')) {
  navToHeader();
}

if (document.querySelector('.main-slider.content_center')) {
  displaySecondInfo();
}

const latestSection = document.querySelector('.page-section.latest-section > .container');

const sender = new FormBasic(latestSection, 'beforeend', senderData);
sender.render();

const senderForm = document.querySelector('.sender-basic form');
const dataForm = {};
senderForm.addEventListener('input', (e) => {
  if (e.target.getAttribute('name') === 'userName') {
    dataForm.name = e.target.value;
  }

  if (e.target.getAttribute('name') === 'phone') {
    dataForm.phone = e.target.value;
  }
})

senderForm.querySelector('button').addEventListener('click', () => {
  window.open(`https://wa.me/79267979561?text=Здравствуйте!%0D%0AМеня%20зовут%20${dataForm.name}.%20Я%20заинтересовался%20вашим%20товаром.%20Пожалуйста%20свяжитесь%20со%20мной%20${dataForm.phone}`, '_blank');
});

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
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
  