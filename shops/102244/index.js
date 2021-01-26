import './utils/aqquring.js'

import BigBanner from '../../modules/BigBanner/BigBanner.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/HeaderTypeThree/HeaderTypeThree.js';
import '../../components/PictureCategories/PictureCategories.js';
import '../../fixes/js/Alert/Alert.js';

if (document.querySelector('.common-home')) {
  new BigBanner(
    'https://res.cloudinary.com/depgheppz/image/upload/v1611061769/Group_7423499_j54tte.png',
  {title: 'Доставка готовой еды', link: 'tel:79806425606', linkContent: '+7 980 642 56 06'}).render();

}

if (document.querySelector('.wrapper')) {

  document.querySelector("#home > div > header > div.header-wrapper > div").classList.add('container-fluid')
  document.querySelector("#home > div > header > div.header-wrapper > div").classList.remove('container')

  document.querySelector(
    '#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a',
  ).textContent = '';
  document
    .querySelector(
      '#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a',
    )
    .insertAdjacentHTML(
      'beforeend',
      `
  <svg width="23" height="21" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="1" fill="black"/>
    <rect y="7" width="23" height="1" fill="black"/>
    <rect y="14" width="23" height="1" fill="black"/>
  </svg>
  `,
    );

  setTimeout(() => {
    document.querySelector('.prevent_touch_banner.d-none').insertAdjacentHTML(
      'afterend',
      `
        <div class="mobile-navigation-close">
          <i class="fal fa-times"></i>
        </div>
      `,
    );
  }, 500);

  document.querySelector('.mobile-navigation-wrapper').addEventListener('click', (e) => {
    document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
      const nav = document.querySelector('.navigation');
      nav.classList.add('nav-closed');
      nav.classList.remove('nav-opened');
      document.querySelector('body').classList.remove('overflow-hidden');
    });
  });
}
