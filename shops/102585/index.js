import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

if (document.querySelector('.checkout-checkout')) {
  document.querySelector('#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.shipment-reloader > div > h2').innerHTML = 'Шаг 2: Способ доставки';
  document.querySelector('#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > h2').innerHTML = 'Шаг 3: Способ оплаты';
}

if (document.querySelector('.common-home')) {
  document.querySelector('.page-section.latest-section').insertAdjacentHTML('afterend', '<div class="contactsSection"><div class="container"><div class="contacts-flex"><div class="contacts-title"><span>Контакты</span></div><div class="otherInfo"><div class="number"><div class="number-img"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451452/Group_208_ydygyb.png" alt=""></div><div class="title-and-number"><div class="number-title"><span>Номер телефона</span></div><div class="real-number"><span>8 919 721-55-83</span></div></div></div><div class="email"><div class="email-img"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451450/Group_209_ye2yi4.png" alt=""></div><div class="title-and-email"><div class="email-title"><span>Почтовый адрес</span></div><div class="real-email"><span>severinovsquash@gmail.com</span></div></div></div></div></div></div></div>');
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML(
    'afterbegin',
    `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`,
  );

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Северинов Алексей Вальерьевич');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Северинов Алексей Вальерьевич', media);
  req.setTemplate();
}
