import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, contact } from './utils/requsites.js';

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Ляховский Александр Владимирович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Ляховский Александр Владимирович', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {

}