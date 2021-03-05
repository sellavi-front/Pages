import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/accuring/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
// import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (document.querySelector('.common-home')) {
  document.querySelector('.common-home > div > div.content-area > div.main-slider.content_center').remove()
  document.querySelector('.common-home > div > div.content-area').insertAdjacentHTML('afterbegin', `<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614677976/Frame_7_bpoulv.png"><div><div></div><div></div></div></div>`)
  document.querySelector('.common-home > div > div.content-area > section > div > div > div:nth-child(3)').insertAdjacentHTML('afterend', '<a href="https://store104197.sellavi.com/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614688997/Frame_11_yfrjss.png"></a>')
  document.querySelector('.common-home .custom_section').insertAdjacentHTML('afterbegin', '<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614690008/Group_7423542_wshy7m.png"></div>')
  document.querySelector('.common-home .custom_section').insertAdjacentHTML('beforeend', '<div class="container"><div>Доставка интим товаров в Москве</div></div>')
  document.querySelector('.common-home > div > div.content-area > div.custom_section > div:nth-child(2) > div').insertAdjacentHTML('afterend', '<div><div><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614694320/Component_1_22_bmwbbg.png"><a href="https://orgasmme.ru/pay-delivery/">Подробнее</a></div><div><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614694320/Component_2_12_yqyt7g.png"><a href="https://orgasmme.ru/pay-delivery/">Подробнее</a></div><div><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614694321/Component_3_8_iogb8m.png"><a href="https://www.pochta.ru/parcels">Подробнее</a></div></div>')
  if (screen.width < 480) {
    document.querySelector('#home > div > div.content-area > div.container > img').setAttribute('src', 'https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614698296/Frame_13_1_qjwjjw.png')
    document.querySelector('#home > div > div.content-area > div.custom_section > div:nth-child(1) > img').setAttribute('src', 'https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614858703/Group_7423565_jk9ol7.png')
  }
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
