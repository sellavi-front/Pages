import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js'
import '../../fixes/js/RemoveBlur/RemoveBlur.js'
import renderContactsInCustomSection from "./blocks/contacts/contacts.js"

import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'


document.querySelector("body").insertAdjacentHTML("afterbegin", `
  <div class="custom-preloader">
      <span>
        <img src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1611075507/ru/clients/102783/49ce36e60b3fe07908f5438d34abb68fd3b3458d.jpg" alt="img" />
    </span>
  </div>
`)

/*setTimeout(function() {*/
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".custom-preloader");
    preloader.className += " hidden";
  });
/*}, 1500)*/


if (location.href.includes('term-of-use')) {
<<<<<<< HEAD
<<<<<<< HEAD
  const req = new Requisites(requsites, 'beforeend', 'ИП "Корсаков Эдуард Владимирович"');
=======
  const req = new Requisites(requsites, 'beforeend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ');
>>>>>>> main/main
=======
  const req = new Requisites(requsites, 'beforeend', 'ИП "Корсаков Эдуард Владимирович"');
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

<<<<<<< HEAD
<<<<<<< HEAD
  const req = new Requisites(requsites, 'afterend', 'ИП "Корсаков Эдуард Владимирович"', media);
=======
  const req = new Requisites(requsites, 'afterend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ', media);
>>>>>>> main/main
=======
  const req = new Requisites(requsites, 'afterend', 'ИП "Корсаков Эдуард Владимирович"', media);
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a
  req.setTemplate();
}

/*

if (location.href.includes('policy')) {
  const req = new Requisites(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a
    requsites,
    'afterend',
    'ИП "Корсаков Эдуард Владимирович"',
    document.querySelector('#content > div > div'),
<<<<<<< HEAD
=======
      requsites,
      'afterend',
      'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ',
      document.querySelector('#content > div > div'),
>>>>>>> main/main
=======
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a
  );
  req.setTemplate();
}
*/

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a
    requsites,
    'afterend',
    'ИП "Корсаков Эдуард Владимирович"',
    document.querySelector('#content > div > div'),
    dataContact,
<<<<<<< HEAD
=======
      requsites,
      'afterend',
      'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ',
      document.querySelector('#content > div > div'),
      dataContact,
>>>>>>> main/main
=======
>>>>>>> 199e4a66a2ac23eff9af7219ce24fcfb0b8bd92a
  );
  req.setTemplate();
}



renderContactsInCustomSection()