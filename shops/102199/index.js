import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import contactData from './utils/contactData.js'

import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js'
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';

const customSection = document.querySelector('.custom_section');

if (document.querySelector('.wrapper')) {
  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();

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
