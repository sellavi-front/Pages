import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

if (location.href.includes('contact')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(1) > div > strong').insertAdjacentHTML('afterend', '<div>Нижегородская область, г.Кстово, ул.Шохина, 2а ;</div>');
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Давыдов Олег Борисович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Давыдов Олег Борисович', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}