import Requisites from '../../modules/Requisites/Requisites.js';
import {
  requsites,
  dataContact
} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';



// if (document.querySelector(".header-wrapper")) {
//   document.querySelector(".header-wrapper").classList.add("container")

//   document.querySelector('#search > div.search_field > input').placeholder = ""

//   //wish button header
//   document.querySelector("#home > div > header > div.header-wrapper.container > div.container-fluid > div.header-cart.sticky").insertAdjacentHTML("afterbegin", `<div class="header_wishlist">
//     <a id="wishlist" class="position-relative" href="https://colorexnn.ru/index.php?route=account/wishlist" role="link">
//       <i class="far fa-heart"></i>
//     </a>
// </div>`)
// }


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