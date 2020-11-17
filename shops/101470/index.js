import '../../fixes/fixes.js';

import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import HorizontTitleDecription from '../../components/HorizontTitleDecription/HorizontTitleDecription.js';
import ContactsSimple from '../../components/ContactsSimple/ContactsSimple.js';
import SenderTypeOne from '../../components/SenderTypeOne/SenderTypeOne.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-md-3',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
];

if (document.readyState == 'interactive' || document.readyState == 'loading') {
  document.querySelector('html').style.opacity = '0';
}
window.onload = () => {
  document.querySelector('html').style.opacity = '1';
};

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation-wrapper>div>.navigation');
  const headerLogo = headerWrapper.querySelector('.logo');
  const footerContentText = document.querySelectorAll('.footer_content_text');
  const footerWrapper = document.querySelector('.footer_content_wrapper');
  const footerWidgetsRow = document.querySelector('footer > .footer-widgets > .container > .row');
  const footerWidgets = document.querySelector('footer > .footer-widgets > .container');
  const footerWidgetCol2 = document.querySelector(
    'footer > .footer-widgets > .container > div > div:nth-child(2)',
  );
  const footerWidgetCol2List = document.querySelector(
    'footer > .footer-widgets > .container > div > div:nth-child(2) > div > ul',
  );
  const footerMetaContainer = document.querySelector('.footer-meta>div');

  const forDelete = [search, cartText, navigation, footerWidgetCol2, footerWidgetCol2];
  const contacts = {
    title: 'Наши контакты',
    phone: '+7(926)525-92-48',
    email: '1981market@mail.ru'
  }

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);
  const deleteElements = new DeleteElements(forDelete);
  const deleteClassesFooter = new DeleteClasses(footerContentText, bootstrapClasses);
  const contactsSimple = new ContactsSimple(contacts, footerWidgetsRow);
  const senderTypeOne = new SenderTypeOne(footerWidgets);

  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');

  footerMetaContainer.classList.add('container-fluid');
  footerMetaContainer.classList.remove('container');

  headerLogo.insertAdjacentHTML('afterend', navigation.outerHTML);
  footerWrapper.insertAdjacentHTML('beforeend', footerWidgetCol2List.outerHTML);

  deleteElements.remove();

  deleteClassesFooter.findAndDelete();
  buttonsInHeader.setTemplate(headerWrapper);
  contactsSimple.render();
  senderTypeOne.render();
}

if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('.page-section>.container');

  const objBanner = {
    title: 'Полезные продукты',
    link: 'https://store101470.sellavi.com/%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B/',
    linkContent: 'В КАТАЛОГЕ',
  };

  const titleAbout = 'Eco - Маркет';
  const descpSubtitle =
    'Десятилетия назад о "ноль отходов" задумывались только компании-производители. Сегодня "ноль отходов" - это стиль жизни, к которому присоединяются все больше и больше людей.';

  const horizontTitleDecription = new HorizontTitleDecription(titleAbout, descpSubtitle, pageSection);
  const bigBanner = new BigBanner(document, objBanner);

  bigBanner.render();
  horizontTitleDecription.render();
}

if (document.querySelector('.product-item')) {
  const productItem = document.querySelectorAll('.product-item');

  const deleteClassesProd = new DeleteClasses(productItem, bootstrapClasses);

  deleteClassesProd.findAndDelete();
}
