import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import { collapseShow } from './scripts/collapseShow.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const navigationElements = document.querySelectorAll('.navigation .sf-menu li > a');

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
  const selectors = [];
  const cartI = document.querySelector('body .header-cart i');

  headerContainer.classList.add('container');
  headerContainer.classList.remove('container-fluid');

  cartI.classList.add('far');
  cartI.classList.remove('fal');

  headerLoginText.remove();

  // Add underline to nav elem for open page
  navigationElements.forEach(elem => {
    if (elem.getAttribute('href') == location.href) {
      elem.style.borderBottom = '2px solid'
    }
  })

  // END add underline to nav elem for open page

  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();

    headerWidgets.remove();
    collapseShow(links);
    document
      .querySelector('.header_widgets')
      .insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

      const headerLoginIco = document.querySelectorAll('.header_login>.d-none.d-sm-block.d-lg-none');
      console.log(headerLoginIco);
      console.log(headerLoginIco[0]);

      headerLoginIco[0].classList.forEach((selector) => selectors.push(selector));

      const deleteSelectors = new DeleteClasses(headerLoginIco, selectors);
      deleteSelectors.findAndDelete();
  } else {
    headerContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="header_widgets">${wishList}${cart.outerHTML}</div>`,
    );
    cart.remove();
  }
}
