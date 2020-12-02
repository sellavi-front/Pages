// import Requisites from '../../modules/Requisites/Requisites.js';
// import requsites from './utils/requsites.js'

// import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/PictureCategories/PictureCategories.js'
import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import VideoBanner from '../../components/VideoBanner/VideoBanner.js';

import '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import {bannerContent} from './constants/constants.js';
import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';

import salesData from './utils/salesData.js';
import advantagesData from './utils/advantagesData.js';
import {senderData} from './utils/senderData.js';

if (document.querySelector('.common-home')) {

  /** VIDEO BANNER **/
  const cstmBanner = document.querySelector('.custom_banner');
  const videoBanner = new VideoBanner(cstmBanner, 'beforeend', bannerContent);
  videoBanner.render();
  /** END VIDEO BANNER **/
}

if (document.querySelector('.wrapper')) {
  const container = document.querySelectorAll('.container');
  const sctmSection = document.querySelector('.custom_section');
  // Login Ico
  const headerLoginText = document.querySelector('.header_login>a');
  headerLoginText.remove();
  const headerLoginIco = document.querySelector('.header_login>a');
  headerLoginIco.classList.remove('d-none', 'd-lg-none');
  // End login Ico

  // remove cart text
  const cart = document.querySelector('#cart');
  cart.querySelector('span').remove()
  // end remove cart text

  // transfer navigation
  const headerWrapper = document.querySelector('.header-wrapper>div>.logo');
  const navigation = document.querySelector('.navigation');
  headerWrapper.insertAdjacentHTML('beforebegin', navigation.outerHTML);
  navigation.remove();
  // end transfer navigation

  // Sales
  const infoCardTypeOne = new InfoCardTypeOne(
    sctmSection,
    'beforeEnd',
    salesData,
  );
  infoCardTypeOne.render();
  // End sales

  const advantagesCard = new InfoCardTypeOne(
    sctmSection,
    'beforeEnd',
    advantagesData,
  );
  advantagesCard.render();



  const sender = new FormBasic(sctmSection, 'afterbegin', senderData)

  sender.render()
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
