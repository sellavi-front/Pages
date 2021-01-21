import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
// import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
// import socIconsData from './utils/socIconsData.js';

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div:nth-child(1) > div > div > div > div > div > div > h3 > span').insertAdjacentHTML('afterend', '<div class="info-after">для прочистки любой степени сложности</div>');
  document.querySelector('#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > h3 > span ').insertAdjacentHTML('afterend', '<div class="info-after">для прочистки любой степени сложности</div>');
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > section.page-section.homefeatured_category').insertAdjacentHTML('beforebegin', '<div class="info-info"><div class="container"><div class="chist"><span>У нас есть оборудование для прочистки :</span><div class="images-cat"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981545/Group_263_yqbfu2.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981548/Group_262_qvsvtl.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981550/Group_261_dcngmx.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981552/Group_264_obwqzn.png"></div></div></div></div>');
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > div.info-info').insertAdjacentHTML('afterend', '<div class="container"><span>Каталог товаров</span></div>');
}

if (document.querySelector('.logo')) {
  const oldNavBar = document.querySelector('.nav.sf-menu');
  const newNavBar = oldNavBar.cloneNode(true);
  document.querySelector('.logo').insertAdjacentHTML('afterend', newNavBar.outerHTML);
  oldNavBar.remove()
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Балинец Наталья Александровна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Балинец Наталья Александровна', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Балинец Наталья Александровна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Балинец Наталья Александровна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}

// const footerContainer = document.querySelector('.footer-widgets>div>div');

// new SocIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

// if (document.querySelector('.footer-widgets')) {
//   document.querySelector('#home > div > footer > div.footer-widgets > div.container > div > div.soc-icons > div > div').insertAdjacentHTML('beforebegin', '<div class="title-socIcon">Мы в соцсетях</div>');
// }   