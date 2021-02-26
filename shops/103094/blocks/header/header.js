import "../../../../components/HeaderTypeThree/scripts/removeSelectors.js"
import "../../../../components/HeaderTypeThree/scripts/collapseShow.js"

import CreateAddContainer from '../../../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteClasses from '../../../../modules/DeleteClasses/DeleteClasses.js';
// import { collapseShow } from './scripts/collapseShow.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const navigationElements = document.querySelectorAll('.navigation .sf-menu li > a');
const navigate = document.querySelector('.navigation-wrapper .navigation');
const mobNavWrap = document.querySelector('.mobile-navigation-wrapper');

const links = document.querySelectorAll('.mobile_side_nav_menu>.flexy>a');

const wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
`;

if (document.querySelector('.wrapper')) {
  headerContainer.insertAdjacentHTML('afterbegin', navigate.outerHTML);
  //navigate.remove();

  const navList = document.querySelector('header .sf-menu');
  navList.insertAdjacentHTML('afterbegin', `<li>${mobNavWrap.outerHTML}</li>`);
  mobNavWrap.remove();

  const selectors = [];
  const cartI = document.querySelector('body .header-cart i');

  headerContainer.classList.add('container');
  headerContainer.classList.remove('container-fluid');

  cartI.classList.add('far');
  cartI.classList.remove('fal');

  headerLoginText ? headerLoginText.remove() : null;

  // Add underline to nav elem for open page
  navigationElements.forEach((elem) => {
    if (
      elem.getAttribute('href') == decodeURI(location.href) ||
      location.pathname == elem.getAttribute('href')
    ) {
      elem.style.cssText = 'border-bottom: 2px solid;';
    }
  });

  // END add underline to nav elem for open page

  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();

    headerWidgets.remove();
    // collapseShow(links);
    document
      .querySelector('.header_widgets')
      .insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

    const headerLoginIco = document.querySelectorAll('.header_login>.d-none.d-sm-block.d-lg-none');

    headerLoginIco[0].classList.forEach((selector) => selectors.push(selector));

    const deleteSelectors = new DeleteClasses(headerLoginIco, selectors);
    deleteSelectors.findAndDelete();
  } else {
    const cart = document.querySelector('.header-cart');
    const search = document.querySelector('.header-search');
    const searchScreen = document.querySelector('.search_black_screen')

    headerContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="header_widgets"></div>`,
    );

    const headerWid = document.querySelector('.header_widgets');
    headerWid.insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>${cart.outerHTML}`);
    headerWid.insertAdjacentHTML('afterbegin', `${searchScreen}${search.outerHTML}`);

    cart.remove();
    search.remove();
    // searchScreen.remove();
    cart.querySelector('span').remove()
  }

  Array.from(
    document.querySelector('body > div > header > div.header-wrapper > div > nav > ul').children,
  ).forEach((li, i) => {
    if (i > 2) {
      li.remove();
    }
  });

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

  /*document.querySelector('.mobile-navigation-wrapper').addEventListener('click', (e) => {
    document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
      const nav = document.querySelector('.navigation');
      nav.classList.add('nav-closed');
      nav.classList.remove('nav-opened');
      document.querySelector('body').classList.remove('overflow-hidden');
    });
  });*/
}
