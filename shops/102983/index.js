import Requisites from '../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../fixes/js/RemoveBlurAndAddBtn/RemoveBlurAndAddBtn.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js';

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div > div > div > div > div > div > div > p > a').innerHTML = 'Подробнее';
  document.querySelector('#home > div > div > section.page-section.homefeatured_category').insertAdjacentHTML('beforebegin', '<div class="preCatTitle"><div class="container"><div class="row"><div class="col-sm">Категории</div></div></div></div>');
}

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
  document.querySelector('#home > div > div.navigation_black_screen').remove();
}

if (location.href.includes('contact')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(1) > div > strong').insertAdjacentHTML('afterend', '<div>Нижегородская область, г.Кстово, ул.Шохина, 2а, 607661;</div>');
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Давыдов Олег Борисович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Давыдов Олег Борисович', media);
  req.setTemplate();
}

if (document.querySelector('.alert.alert-info')) {
  document.querySelector("#home > div > div > div").childNodes[2].textContent = 'Пожалуйста, обратите внимание, чтобы добавить этот продукт в корзину, сначала заполните варианты продукта.';
}

if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}

if (document.querySelector('.common-home')) {
  document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', '<div class="preCatTitle"><div class="container"><div class="row"><div class="col-sm"><div>Сегодня «COLOREX» это:</div><ul><li>- крупнейший производитель лакокрасочных материалов в Швеции;</li><li>- современный исследовательский центр и собственный банк рецептур ЛКМ, состоящий</li><li>- экспорт продукции в 15 стран Европы;</li></ul></div><div class="col-sm"></div><div class="col-sm"><ul><li>- более 3000 оптовых партнеров на международных рынках.</li><li>- полностью автоматизированное предприятие с объемом производства продукции более</li><li>- 13 миллионов литров в год;</li><li>- более чем из 10 000 наименований;</li></ul></div></div></div></div>');
}

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}

if (document.querySelector('.footer')) {
  document.querySelector('#home > div > footer > div.footer-widgets > div.container > div').insertAdjacentHTML('beforebegin', '<hr>');
}

if (document.querySelector('.header-wrapper')) {
  document.querySelector('.nav.sf-menu').insertAdjacentHTML('beforeend', '<li><a href="https://colorexnn.ru/contact/">Обратная связь</a></li><li><a href="https://colorexnn.ru/pay-delivery/">Оплата и доставка</a></li><li><a href="https://colorexnn.ru/about/">О нас</a></li>')
}

if (document.querySelector('.product-product')) {
  let oldDescr = document.querySelector('.tab-pane.active')
  let newDesc = oldDescr.cloneNode(true)
  document.querySelector('#home > div > section > div').insertAdjacentHTML('afterbegin', newDesc.outerHTML)
  oldDescr.remove()
}