import '../../fixes/fixes.js';

import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const search = document.querySelector('.header-search');
  const cartText = document.querySelector('#cart > span');
  const navigation = document.querySelector('.navigation-wrapper>div>.navigation');
  const headerLogo = headerWrapper.querySelector('.logo');

  const forDelete = [search, cartText, navigation];

  const objBanner = {
    title: 'Коврики для ЙОГИ',
    link: '#',
    linkContent: 'В КАТАЛОГЕ',
  };

  const deleteElements = new DeleteElements(forDelete);
  const bigBanner = new BigBanner(document, objBanner);

  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');

  headerLogo.insertAdjacentHTML('afterend', navigation.outerHTML);
  deleteElements.remove();

  bigBanner.render();
}
