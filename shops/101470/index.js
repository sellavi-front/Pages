 import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
 import '../../fixes/js/FooterCopy/FooterCopy.js'

//import ChangeAgreement from '../../fixes/ChangeAgreement/ChangeAgreement.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import Requisites from '../../modules/Requisites/Requisites.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import HorizontTitleDecription from '../../components/HorizontTitleDecription/HorizontTitleDecription.js';
import ContactsSimple from '../../components/ContactsSimple/ContactsSimple.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

import requsites from './utils/requsites.js';

import '../../components/HeaderTypeOne/HeaderTypeOne.js';


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

  const tex = document.querySelector('footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(3) > a').textContent;
  localStorage.setItem('phone', tex);

  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const cartText = document.querySelector('#cart > span');
  const footerContentText = document.querySelectorAll('.footer_content_text');
  const footerWrapper = document.querySelector('.footer_content_wrapper');
  const footerWidgetsRow = document.querySelector('footer > .footer-widgets > div > .row');
  const footerWidgetCol1 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(1)',
  );
  const footerWidgetCol2 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(2)',
  );
  const footerWidgetCol3 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(3)',
  );
  const footerWidgetCol2List = document.querySelector(
    'footer > .footer-widgets > .container > div > div:nth-child(2) > div > ul',
  );
  const footerMetaContainer = document.querySelector('.footer-meta>div');


  const forDelete = [/*icoUser, */cartText, footerWidgetCol2, footerWidgetCol1];
  const contacts = {
    title: 'Наши контакты',
    phone: localStorage.getItem('phone'),
    email: '1981market@mail.ru',
  };

  //const buttonsInHeader = new ButtonListInHeader(headerWrapper);
  const deleteElements = new DeleteElements(forDelete);
  const deleteClassesFooter = new DeleteClasses(footerContentText, bootstrapClasses);
  const contactsSimple = new ContactsSimple(contacts, footerWidgetsRow);

  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');

  footerMetaContainer.classList.add('container-fluid');
  footerMetaContainer.classList.remove('container');

  footerWrapper.insertAdjacentHTML('beforeend', footerWidgetCol2List.outerHTML);

  deleteClassesFooter.findAndDelete();
  contactsSimple.render();
  deleteElements.remove();

  const termUse = document.querySelectorAll('.footer_content_wrapper >ul>li>a');

  termUse.forEach(el => {
       if(el.textContent.toLowerCase() === 'условия обслуживание') {
            el.closest('li').remove();
       }
  })

  const oldNode = document.querySelector('footer > div.footer-meta > div > div.row.footer_content_wrapper > ul > li:nth-child(3)');
  document.querySelector(' footer > .footer-widgets > div> div > div > ul').insertAdjacentHTML('beforeend', oldNode.outerHTML);
  oldNode.remove();

  document.querySelector('.contacts-simple__list').insertAdjacentHTML('beforeEnd', `<li ><a href="${location.origin}/about">О нас</a></li>`)
  // containerHeader.insertAdjacentHTML('afterbegin', logo.outerHTML);
  // logo.remove();


  const arrow = document.querySelectorAll('.navigate-menu > li > .arrow');

  arrow.forEach((el) => el.remove());
  const elList = document.querySelectorAll('.navigate-menu>li');
  elList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      console.log(e.target);
      //              el.closest('header').style.cssText = 'background: rgba(0,0,0,.5); border-bottom: 5px solid white';
      el.querySelector('.panel-collapse').style.cssText =
        'display: block; background: rgba(0,0,0,.5);';
    });

    el.addEventListener('mouseleave', (e) => {
      el.querySelector('.panel-collapse').style.cssText = 'display: none; background: black;';
    });

  });

  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

  listt.forEach((el) => {
    const tr = el.textContent;

    if(tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });
}



if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('.page-section>.container');
  const logo = document.querySelector('.logo > a > img');

  const objBanner = {
    title: 'Полезные продукты',
    link: 'https://store101470.sellavi.com/%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B/',
    linkContent: 'В КАТАЛОГЕ',
  };

  const titleAbout = 'Eco - Маркет';
  const descpSubtitle =
    'Десятилетия назад о "ноль отходов" задумывались только компании-производители. Сегодня "ноль отходов" - это стиль жизни, к которому присоединяются все больше и больше людей.';

  const horizontTitleDecription = new HorizontTitleDecription(
    titleAbout,
    descpSubtitle,
    pageSection,
  );
  const bigBanner = new BigBanner(document, objBanner);

  bigBanner.render();
  horizontTitleDecription.render();

  logo.setAttribute('src', 'https://res.cloudinary.com/dtqqfmyqb/image/upload/v1606729735/photo_2020-11-30_12-33-15_upfzhe.png');
}

if (document.querySelector('.product-item')) {
  const productItem = document.querySelectorAll('.product-item');

  const deleteClassesProd = new DeleteClasses(productItem, bootstrapClasses);

  deleteClassesProd.findAndDelete();
}

/* Реквиизиты */

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'afterbegin', 'ИП Аношин Дмитрий Андреевич');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Аношин Дмитрий Андреевич', media);
  req.setTemplate();
}

if (location.href === 'https://store101470.sellavi.com/?from_admin' && 'https://store101470.sellavi.com/') {
  console.log('test');
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="banner-title-button"><a href="https://store101470.sellavi.com/%D0%B4%D0%BB%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0/">товары</a></div>');
}

if (location.href.includes('/checkout')) {
  document.querySelectorAll('.register_block h2').forEach((h2,i) => {
    h2.textContent = h2.textContent.replace(/\d/gi, '');
    h2.textContent = h2.textContent.replace(/Шаг /gi, `Шаг ${i + 1}`);
  })
}
