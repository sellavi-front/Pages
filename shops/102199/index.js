import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'

import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js'

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Абдинов Эльдар Гейдар Оглы');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Абдинов Эльдар Гейдар Оглы', media);
  req.setTemplate();
}
