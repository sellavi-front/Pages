// import Requisites from '../../modules/Requisites/Requisites.js';
// import requsites from './utils/requsites.js'

// import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import VideoBanner from '../../components/VideoBanner/VideoBanner.js';
import '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import {srcVideo} from './constants/constants.js';

if (document.querySelector('.common-home')) {
  /** VIDEO BANNER **/
  const cstmBanner = document.querySelector('.custom_banner');

  const videoBanner = new VideoBanner(srcVideo, cstmBanner, 'beforeend');
  videoBanner.render();
  /** END VIDEO BANNER **/
}

if (document.querySelector('.wrapper')) {

  // Login Ico
  const headerLoginIco = document.querySelector('.header_login>a');
  headerLoginIco.textContent = '';
  headerLoginIco.insertAdjacentHTML('afterbegin', `<i class="far fa-user"></i>`)
  // End login Ico


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
