import Requisites from '../../modules/Requisites/Requisites.js';
import {
  requsites,
  dataContact
} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';




if (document.querySelector('.wrapper')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}

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

  if (screen.width < 480) {
    document.querySelector('#home > div.wrapper.wrapper-closed > div > section').insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="row">
          <div class="col-12">
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
                  <div class="col">- Просмотр Ваших полей</div>
              </div>
              <div class="row desc-footer"><i>При индивидуальном подборе браслета, колье, серёжек Ваши желания и мечты исполнятся значительно быстрее и в большем объёме.</i></div>
          </div>
      </div>
  </div>`)
  } else if (screen.width > 480) {

    document.querySelector('#home > div.wrapper.wrapper-closed > div > section').insertAdjacentHTML('afterbegin', `<div class="container">
  <div class="row">
        <div class="col">
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
                <div class="col">- Просмотр Ваших полей</div>
            </div>
            <div class="row desc-footer"><i>При индивидуальном подборе браслета, колье, серёжек Ваши желания и мечты исполнятся значительно быстрее и в большем объёме.</i></div>
        </div>
    </div>
</div>`)
  }

  if (screen.width > 1024) {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="container"><span> Категории </span></div>  

        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Component_4_3_veqqad.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Component_5_3_bzhesh.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Component_6_2_deqcxi.png"></a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724623/Group_7423524_q1hsbd.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/%D0%B0%D0%BD%D0%BA%D0%BB%D0%B5%D1%82%D1%8B-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B-%D0%BD%D0%B0-%D0%BD%D0%BE%D0%B3%D1%83/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Group_7423525_zcmhwg.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B0/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Group_7423526_vkn0fd.png"></a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Group_7423527_z4lsvi.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%BE%D1%88%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Group_7423528_inh6xw.png"></a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <a href="https://brasletnata.ru/%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613724622/Group_7423529_ktsnbo.png"></a>
            </div>
        </div>
    </div>`)
  } else if (screen.width < 480) {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container">
    <div class="container"><span> Категории </span></div>  

    <div class="row">
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004181/Group_7423521_2_ixpdmr.png"></a>
    </div>
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004264/Group_7423522_1_vsupwi.png"></a>
    </div>
</div>
<div class="row">
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004329/Group_7423523_1_mx2ws0.png"></a>
    </div>
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004365/Group_7423524_3_imfusn.png"></a>
    </div>
</div>
<div class="row">
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B/%D0%B0%D0%BD%D0%BA%D0%BB%D0%B5%D1%82%D1%8B-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D1%8B-%D0%BD%D0%B0-%D0%BD%D0%BE%D0%B3%D1%83/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004399/Group_7423525_2_s08fnw.png"></a>
    </div>
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B0/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004425/Group_7423526_2_zdqaxd.png"></a>
    </div>
</div>
<div class="row">
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004453/Group_7423527_2_nucieq.png"></a>
    </div>
    <div class="col-sm-6">
        <a href="https://brasletnata.ru/%D0%B1%D1%80%D0%BE%D1%88%D0%B8/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614004484/Group_7423528_2_cxk7sq.png"></a>
    </div>
</div>
<div class="row">
    <div class="col">
        <a href="https://brasletnata.ru/%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7/"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613916074/Group_7423529_xvgiks.png"></a>
    </div>
</div>
</div>`) 
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

if (document.querySelector('.checkout-checkout')) {
    document.querySelector('#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.checkout_title > h2').innerHTML = 'Шаг 1: Данные плательщика'
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


if (document.querySelector(".footer-widgets")) {
    document.querySelector("#home > div > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a").innerHTML = "О мастере"
}

if (document.querySelector(".information-information-6862")) {
    document.querySelector("#content > div > div").insertAdjacentHTML("beforebegin", `<div class="col-md-4"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1613662311/20201017_101826_1_nbttwm.png"></div>`)
    document.querySelector("#content > div > div.col-md-12").classList = "col-md-8"
}