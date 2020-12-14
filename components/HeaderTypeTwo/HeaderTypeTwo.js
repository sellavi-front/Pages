import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import { collapseShow } from './scripts/collapseShow.js';
import { removeSelectors } from './scripts/removeSelectors.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const headerLoginIco = document.querySelector('.header_login>.d-none.d-sm-block.d-lg-none');
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

const selectors = []

headerLoginIco.classList.forEach(selector => selectors.push(selector))

new DeleteClasses(headerLoginIco, selectors).findAndDelete();

if (document.querySelector('.wrapper')) {
  headerContainer.classList.add('container')
  headerContainer.classList.remove('container-fluid')

  headerLoginText.remove();
  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();

    headerWidgets.remove();
    collapseShow(links);
    document.querySelector('.header_widgets').insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

  } else {
    headerContainer.insertAdjacentHTML('beforeend', `<div class="header_widgets">${wishList}${cart.outerHTML}</div>`);
    cart.remove();
  }
}
