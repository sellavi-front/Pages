import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
import TemplateTypeOne from '../../templates/TemplateTypeOne/TemplateTypeOne.js';

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Окутина Марина Юрьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Окутина Марина Юрьевна', media);
  req.setTemplate();
}
