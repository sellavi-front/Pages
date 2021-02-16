import './utils/aqquring.js'

import BigBanner from '../../modules/BigBanner/BigBanner.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/HeaderTypeThree/HeaderTypeThree.js';
import '../../components/PictureCategories/PictureCategories.js';
import '../../fixes/js/Alert/Alert.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js';

if (document.querySelector('.common-home')) {
  document.querySelector('header .logo img').setAttribute('src', 'https://res.cloudinary.com/depgheppz/image/upload/v1613045173/Group_4_r5wxrk.png')

  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  new BigBanner(
    'https://res.cloudinary.com/depgheppz/image/upload/v1613045739/beef-strip-loin-steak-black-background-space-text-marble-beef_1_xsak4k.png',
  {title: 'Доставка готовой еды', link: 'tel:79806425606', linkContent: '+7 980 642 56 06'}).render();

    new ContactsWithMap(customSection, 'beforeend', contactData).render()
    document.querySelector('.homefeatured_category > .container').insertAdjacentHTML("afterbegin", '<h2><span>Категории</span></h2>')
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
  <span>Меню</span>
  `,
    );

  // setTimeout(() => {
  //   document.querySelector('.prevent_touch_banner.d-none').insertAdjacentHTML(
  //     'afterend',
  //     `
  //       <div class="mobile-navigation-close">
  //         <i class="fal fa-times"></i>
  //       </div>
  //     `,
  //   );
  // }, 500);

  document.querySelector('.mobile-navigation-wrapper').addEventListener('click', (e) => {
    document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
      const nav = document.querySelector('.navigation');
      nav.classList.add('nav-closed');
      nav.classList.remove('nav-opened');
      document.querySelector('body').classList.remove('overflow-hidden');
    });
  });
}

if (location.href.includes('/checkout')) {
  document.querySelectorAll('.register_block h2').forEach((h2,i) => {
    h2.textContent = h2.textContent.replace(/\d/gi, '');
    h2.textContent = h2.textContent.replace(/Шаг /gi, `Шаг ${i + 1}`);
  })
}