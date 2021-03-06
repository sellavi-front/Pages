import Requisites from '../../../../modules/Requisites/Requisites.js';
import requsites from './requsites.js'


if (location.href.includes('/term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП "Руколеев Станислав Александрович"');

  req.setTemplate();
}

if (location.href.includes('/contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП "Руколеев Станислав Александрович"', media);
  req.setTemplate();
}