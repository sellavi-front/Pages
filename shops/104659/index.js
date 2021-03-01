import Requisites from '../../modules/Requisites/Requisites.js';
import {
  requsites,
  dataContact
} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';





if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Шапошников Валерий Александрович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Шапошников Валерий Александрович', media);
  req.setTemplate();
}

if (document.querySelector('.checkout-checkout')) {
    document.querySelector('#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.checkout_title > h2').innerHTML = 'Шаг 1: Данные плательщика'
}

if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Шапошников Валерий Александрович',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Шапошников Валерий Александрович',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.wrapper')) {
    const changesText = [document.querySelector("#home > nav.navigation.mobile_side_nav > ul > li.flexy > a"), document.querySelector("body .wrapper > header > div.navigation-wrapper > div > nav > ul > li.flexy.no_children > a")]
    for (let i; i <= changesText.length; i++) {
      if (changesText[i] && changesText[i].textContent.trim().toLowerCase() === 'блог') {
        changesText[i].textContent = 'Новости'
      }
    }
  }

  if (document.querySelector('.module-blog')) {
    document.querySelector("#home > div > div.content-area > section.page-section.titles > div > div > h1").textContent = 'Новости'
  }
})

