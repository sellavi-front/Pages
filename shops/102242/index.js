// import Requisites from '../../modules/Requisites/Requisites.js';
// import requsites from './utils/requsites.js'



import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../components/PictureCategories/PictureCategories.js';
import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import VideoBanner from '../../components/VideoBanner/VideoBanner.js';
import FormBasic from '../../components/FormBasic/FormBasic.js';
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import ColorChoise from '../../components/ColorChoise/ColorChoise.js';
import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
import '../../modules/ButtonListInHeader/ButtonListInHeader.js';

import { bannerContent } from './constants/constants.js';
import contentBannerData from './utils/contentBannerData.js';
import advantagesData from './utils/advantagesData.js';
import senderData from './utils/senderData.js';

if (document.querySelector('.common-home')) {
  const sctmSection = document.querySelector('.custom_section');
  const logo = document.querySelector('.logo img');

  logo.setAttribute(
    'src',
    'https://res.cloudinary.com/gz-company/image/upload/v1606990377/%D0%9A%D0%BE%D1%80%D1%81%D0%B5%D1%82%D1%8B/Group_1_5_yvhzbg.png',
  );
  /** VIDEO BANNER **/
  const cstmBanner = document.querySelector('.custom_banner');
  const videoBanner = new VideoBanner(cstmBanner, 'beforeend', bannerContent);
  videoBanner.render();
  /** END VIDEO BANNER **/

  // Sales
  // const infoCardTypeOne = new InfoCardTypeOne(sctmSection, 'beforeEnd', salesData);
  // infoCardTypeOne.render();

  //Content banner
  const contentBanner = new ContentBannerTypeOne(sctmSection, 'beforeEnd', contentBannerData);
  contentBanner.render();

  const advantagesCard = new InfoCardTypeOne(
    sctmSection,
    'beforeEnd',
    advantagesData,
    'Преимущества',
  );
  advantagesCard.render();
  // End sales

  //rm attr fron advantages

  document.querySelectorAll('.info-card__item>a').forEach(a => a.removeAttribute('href'));
}

if (document.querySelector('.wrapper')) {
  const cartt = document.querySelector('#cart > i');
  cartt.classList.add('far');
  cartt.classList.remove('fal');

  // Login Ico
  const headerLoginText = document.querySelector('.header_login>a');
  headerLoginText.remove();
  const headerLoginIco = document.querySelector('.header_login>a');
  headerLoginIco.classList.remove('d-none', 'd-lg-none');
  // End login Ico

  // remove cart text
  const cart = document.querySelector('#cart');
  cart.querySelector('span').remove();
  // end remove cart text

  // transfer navigation
  const headerWrapperLogo = document.querySelector('.header-wrapper>div>.logo');
  const navigation = document.querySelector('.navigation-wrapper .navigation');
  console.log(headerWrapperLogo);
  headerWrapperLogo.insertAdjacentHTML('beforebegin', navigation.outerHTML);
  navigation.remove();
  // end transfer navigation

  const footerCols = document.querySelectorAll('.footer-widgets > div > div > div');
  footerCols.forEach((col) => {
    col.classList.add('coll');
    col.classList.remove('col-md-3');
  });

  const footerWidgets = document.querySelector('.footer-widgets');
  const social = new SocialIconsTypeOne(footerWidgets, 'beforeend');
  social.render();

  document.querySelector('.bs-menu-toggle').remove();
}

if (document.querySelector('.product-product')) {
  document.querySelector('.table_holder').remove();
  document.querySelector('.share_page_wrapper').remove();

  const lastSection = document.querySelector(
    '#home > div > div.content-area > section.page-section.overflow-hidden',
  );

  const sender = new FormBasic(lastSection, 'beforeend', senderData);
  sender.render();

  const colorChoise = new ColorChoise();
  colorChoise.render();
}

// if (location.href.includes('term-of-use')) {
//   const req = new Requisites(requsites, 'beforeend', 'ИП Харламова Зоя Николаевна');

//   req.setTemplate();
// }

// if (location.href.includes('contact')) {
//   const media = document.querySelector('.contact-info > .media-list > .media:last-child');

//   const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', media);
//   req.setTemplate();
// }
