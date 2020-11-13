import '../../fixes/fixes.js';

import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation-wrapper>div>.navigation');
  const headerLogo = headerWrapper.querySelector('.logo');
  const footerContentText = document.querySelectorAll('.footer_content_text');
  const footerWrapper = document.querySelector('.footer_content_wrapper');
  const footerWidgetCol2 = document.querySelector("footer > .footer-widgets > .container > div > div:nth-child(2) > div > ul");
  const productItem = document.querySelectorAll('.product-item');

  const forDelete = [search, cartText, navigation, footerWidgetCol2];
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

  const objBanner = {
    title: 'Коврики для ЙОГИ',
    link: '#',
    linkContent: 'В КАТАЛОГЕ',
  };

  const deleteElements = new DeleteElements(forDelete);
  const deleteClassesFooter = new DeleteClasses(footerContentText, bootstrapClasses);
  const deleteClassesProd = new DeleteClasses(productItem, bootstrapClasses);
  const bigBanner = new BigBanner(document, objBanner);

  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');

  headerLogo.insertAdjacentHTML('afterend', navigation.outerHTML);
  footerWrapper.insertAdjacentHTML('beforeend', footerWidgetCol2.outerHTML);

  deleteElements.remove();

  bigBanner.render();

  deleteClassesProd.findAndDelete();
  deleteClassesFooter.findAndDelete();

}
