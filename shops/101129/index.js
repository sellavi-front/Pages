import Requisites from '../../modules/Requisites/Requisites.js';

if (location.href.includes('term-of-use')) {
  const req = new Requisites(data, 'afterbegin');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(data, 'afterend', media);
  req.setTemplate();
}
