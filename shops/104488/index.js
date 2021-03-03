import Requisites from '../../modules/Requisites/Requisites.js';
import {
  requsites,
  dataContact
} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (document.querySelector('.common-home')) {

  document.querySelector('.page-section.latest-section').insertAdjacentHTML('afterend', `<div class="contactsSection">
  <div class="container">
    <div class="contacts-flex">

      <div class="otherInfo">
        <div class="time">
          <div class="time-img"><img
              src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614495343/Group_7423528_zmhbqf.png" alt=""></div>
          <div class="title-and-time">
            <div class="time-title"><span>Часы работы</span></div>
            <div class="real-time"><span>с 9.00 до 21.00</span></div>
          </div>
        </div>
        <div class="phones">
          <div class="phone-img"><img
              src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614495342/Group_208_klihn8.png" alt=""></div>
          <div class="title-and-phone">
            <div class="phone-title"><span>Номер телефона</span></div>
            <div class="real-phone"><span>+7 906 442 49 53</span></div>
          </div>
        </div>
        <div class="email">
          <div class="email-img"><img
              src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614495341/Group_209_i1fx0a.png" alt=""></div>
          <div class="title-and-email">
            <div class="email-title"><span>Почтовый адрес</span></div>
            <div class="real-email"><span>negasonpost@yandex.com</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
}

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('.logo').insertAdjacentHTML('beforebegin', newNav.outerHTML);
  oldNav.remove();
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > section.page-section.homefeatured_category > div > div').insertAdjacentHTML('beforebegin', '<div class="container"><span>Категории</span></div>')
}

if (document.querySelector('.information-contact')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(2)').insertAdjacentHTML('beforebegin', `<div class="media">
                  <i class="float-right fa fa-phone"></i>
                  <div class="media-body">
                    <strong>Часы работы:</strong><br><soan>
                    с 9.00 до 21.00                  </span></div>
                </div>`)
                document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(2) > i').classList = 'float-right fa fa-clock'
                document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(2) > div > strong').innerHTML = 'Часы работы'
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