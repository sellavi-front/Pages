import Requisites from '../../../../modules/Requisites/Requisites.js';
<<<<<<< HEAD
import {requsites} from './requsites.js'
=======
import {requsites, dataContact} from './requsites.js'
>>>>>>> 3967c4cdf5a62e62000ab59d4c4a80873bac7df2

const orgName = Object.values(requsites)[0]

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', orgName);

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', orgName, media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}