import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import contactData from './utils/contactData.js'

import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../templates/TemplateTypeOne/TemplateTypeOne.js'
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';



if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();

}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {

  new SocialIconsTypeOne(footerContainer, 'beforeend').render();

  if (catergoryBanners) {
    catergoryBanners.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4"><span> Категории </span></h2>`)
  }
}


if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Абдинов Эльдар Гейдар Оглы');
  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Абдинов Эльдар Гейдар Оглы', media);
  req.setTemplate();
}
