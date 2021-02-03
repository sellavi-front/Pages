import pages from '../utils/contants/conditions.js';
import renderContactsInCustomSection from './components/contacts.js';

if (pages.main) {
  // renderContactsInCustomSection();

  document.querySelector('.custom_section').insertAdjacentHTML(
    'beforeend',
    `<div class="container">
    <div class="d-flex justify-content-between flex-wrap align-items-center">
      <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611932692/102273/Frame_2_m4fgs8.png" style="max-width: 600px; width: 100%;">
      <div style="max-width: 500px; width: 100%;">
        <h4>О нас</h4>
        <p>
        Я сделаю для Вас браслет, который станет не только эксклюзивным украшением, но и личным талисманом, подходящим именно Вашему знаку зодиака. А так же он точно никого не оставит равнодушным.
        </p>
      </div>
      </div>
    </div>
  `,
  );

  document.querySelector('.custom_section').insertAdjacentHTML(
    'beforeend', `
      <div class="d-flex flex-wrap justify-content-between">
          <div class="d-flex">
            <img src="https://res.cloudinary.com/depgheppz/image/upload/v1612356741/Group_7423519_svefer.png">
            <p class="d-flex flex-column">
              <b class="">Адрес</b>
              <span>Адрес Адрес Адрес</span>
            </p>
          </div>
          <div class="d-flex">
            <img src="https://res.cloudinary.com/depgheppz/image/upload/v1612356741/Group_208_t0zswf.png">
            <p class="d-flex flex-column">
              <b class="">Адрес</b>
              <span>Адрес Адрес Адрес</span>
            </p>
          </div>
          <div class="d-flex">
            <img src="https://res.cloudinary.com/depgheppz/image/upload/v1612356741/Group_209_xe0c8z.png">
            <p class="d-flex flex-column">
              <b class="">Адрес</b>
              <span>Адрес Адрес Адрес</span>
            </p>
          </div>
      </div>
    `);
}

if (location.origin) {
  document
    .querySelector('#home > div.mobile-bottom-nav > ul > li.categories.mobile-bottom-tab > a')
    .addEventListener('click', () => {
      document
        .querySelector('#home > nav.mobile_bottom_nav.nav-opened > ul > li.home_link')
        .classList.add('flexy');
    });
}
