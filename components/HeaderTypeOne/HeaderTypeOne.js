import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import NavTransferTo from '../../modules/NavTransferTo/NavTransferTo.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLogo = document.querySelector('.header-wrapper .logo');
const wishList = `
  <div class="header_wishlist">
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
  </div>
`;

if (document.querySelector('.wrapper')) {
  const cart = document.querySelector('.header-cart');
  const cartI = cart.querySelector('i');
  cartI.classList.add('far');
  cartI.classList.remove('fal');

  if (headerWidgets) {
    new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML).render();
    headerWidgets.remove();

    headerWidgets.insertAdjacentHTML('afterbegin', wishList);
  } else {

    headerContainer.insertAdjacentHTML('beforeend', `<div class="header_widgets">${wishList}${cart}</div>`);
    cart.remove();
  }

  new NavTransferTo(headerLogo, 'afterend').transfer();
}
