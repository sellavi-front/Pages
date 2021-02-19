import Requisites from '../../modules/Requisites/Requisites.js';
import {
  requsites,
  dataContact
} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';



if (document.querySelector(".header-wrapper")) {
  document.querySelector(".header-wrapper").classList.add("container")

  document.querySelector('#search > div.search_field > input').placeholder = ""

  //wish button header
  document.querySelector("#home > div > header > div.header-wrapper.container > div.container-fluid > div.header-cart.sticky").insertAdjacentHTML("afterbegin", `<div class="header_wishlist">
    <a id="wishlist" class="position-relative" href="https://brasletnata.ru/index.php?route=account/wishlist" role="link">
      <i class="far fa-heart"></i>
    </a>
</div>`)
}

//Description block
if (document.querySelector(".common-home")) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div > section').insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="row">
        <div class="col-5">
            <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613662311/20201017_101826_1_nbttwm.png">
        </div>
        <div class="col">
            <div class="row desc-title">Здравствуйте, меня зовут Наталья!</div>
            <div class="row desc-main">Я создаю волшебные, полезные украшения из натуральных камней! Более десяти лет я работаю с камнями, с их энергиями, настраиваю украшения для исполнения Ваших желаний!️
Нам всегда хочется чувствовать помощь, чувствовать, что мы не одни. И в этом случае помогают минералы. А правильно подобранные камни именно для Вас, для Вашей энергетики. Это огромная помощь в исполнении Ваших желаний.
Для подбора камней, украшений использую несколько техник, это для того, что бы более точно и быстро Вы достигли желаемого.</div>
            <div class="row four-system">Я применяю четыре системы:</div>
            <div class="row systems-one">
                <div class="col">- Психоматрица</div>
                <div class="col">- Китайскую метафизику</div>
            </div>
            <div class="row systems-two">
                <div class="col">- Натальная карта</div>
                <div class="col">- Просмотр ваших полей</div>
            </div>
            <div class="row desc-footer"><i>При индивидуальном подборе браслета, колье, серёжек Ваши желания и мечты исполнятся значительно быстрее и в большем объёме.</i></div>
        </div>
    </div>
</div>`)
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