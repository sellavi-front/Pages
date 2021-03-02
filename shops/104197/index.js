import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
// import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > div.main-slider.content_center').remove()
  document.querySelector('#home > div > div.content-area').insertAdjacentHTML('afterbegin', `<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614677976/Frame_7_bpoulv.png"><div><div></div><div></div></div></div>`)
  document.querySelector('#home > div > div.content-area > section > div > div > div:nth-child(3)').insertAdjacentHTML('afterend', '<a href="https://store104197.sellavi.com/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614688997/Frame_11_yfrjss.png"></a>')
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Горелова Мария Сергеевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Горелова Мария Сергеевна', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Горелова Мария Сергеевна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Горелова Мария Сергеевна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}
