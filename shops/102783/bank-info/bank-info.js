import Requisites from '../../../modules/Requisites/Requisites.js';
import requisites from './../utils/requsites.js'

if (location.href.includes('terms-of-use')) {
  const req = new Requisites(requisites, 'beforeend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ', media);
  req.setTemplate();
}