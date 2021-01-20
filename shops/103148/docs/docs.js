import Requisites from '../../../modules/Requisites/Requisites.js';
import requisites from './data.js'

if (location.href.includes('terms-of-use')) {
  const req = new Requisites(requisites, 'beforeend', 'ИП Пономарева Кристина Вячеславовна');
  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requisites, 'afterend', 'ИП Пономарева Кристина Вячеславовна', media);
  req.setTemplate();
}