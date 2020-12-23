import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import contactData from './utils/contactData.js'

// import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js'
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();

  // reset cut image in categories
  const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
  imgCat.forEach(cat => {
    const src = cat.getAttribute('src');

    let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');

    cat.setAttribute('src', replacedSrc);
  })
  // rend reset cit img
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Харламова Зоя Николаевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', document.querySelector("#content > div > div"));
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', document.querySelector("#content > div > div"), dataContact);
  req.setTemplate();
}
