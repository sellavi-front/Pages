import Requisites from '../../../modules/Requisites/Requisites.js';
import requisites from './bank.js'

if (location.href.includes('terms-of-use')) {
  const req = new Requisites(requisites, 'beforeend', 'ИП РОХАС НУНЭ СЕЙРАНОВНА');
  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requisites, 'afterend', 'ИП РОХАС НУНЭ СЕЙРАНОВНА', media);
  req.setTemplate();
}