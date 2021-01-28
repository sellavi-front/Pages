import Requisites from '../../../../modules/Requisites/Requisites.js';
import requisites from './requsites.js'

const orgName = Object.values(requisites)[0]

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requisites, 'beforeend', orgName);

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requisites, 'afterend', orgName, media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requisites,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requisites,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}