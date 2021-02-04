import pages from '../utils/contants/conditions.js';
// import renderContactsInCustomSection from './components/contacts.js';
import SocialIcons from '../../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'

localStorage.setItem('insta', document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > ul > li > a") ? document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > ul > li > a").getAttribute('href') : '')

const defaultData = [
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-instagram_1_rw7nv3.svg',
    link: localStorage.getItem('insta'),
  },
];

if (pages.main) {
  // renderContactsInCustomSection();

  localStorage.setItem('email', document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(2) > a").textContent)
  localStorage.setItem('tel', document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(3) > a").textContent)

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

  document.querySelector('.custom_section > .container').insertAdjacentHTML(
    'beforeend', `
      <div class="d-flex flex-wrap justify-content-center mt-5">

          <div class="d-flex mr-5">
            <img style="width: 40px; height: 40px;" src="https://res.cloudinary.com/depgheppz/image/upload/v1612356741/Group_208_t0zswf.png">
            <p class="d-flex flex-column ml-4">
              <b class="">Телефон</b>
              <span>${localStorage.getItem('tel')}</span>
            </p>
          </div>
          <div class="d-flex">
            <img style="width: 40px; height: 40px;" src="https://res.cloudinary.com/depgheppz/image/upload/v1612356741/Group_209_xe0c8z.png">
            <p class="d-flex flex-column ml-4">
              <b class="">E-mail</b>
              <span>${localStorage.getItem('email')}</span>
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

if (document.querySelector('footer')) {
  new SocialIcons(document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div"), 'beforeend', defaultData).render()
  document.querySelector('footer .soc-icons').insertAdjacentHTML('afterbegin', '<h4 class="widget-title">Мы в Instagram</h4>')
  document.querySelector('footer .soc-icons').classList.add('col-md-3')
}
