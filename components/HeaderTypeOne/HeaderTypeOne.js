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
  const cart = document.querySelector('#cart > i');
  cart.classList.add('far');
  cart.classList.remove('fal');

  if (!headerWidgets) {
    headerContainer.insertAdjacentHTML('beforeend', `<div class="header_widgets"></div>`);

    const headWidgets = headerContainer.querySelector('.header_widgets');
    new CreateAddContainer(headerContainer, 'beforeend', headWidgets.outerHTML).render();
    headerWidgets.remove();

    headerWidgets.insertAdjacentHTML('afterbegin', wishList);
  }
  new NavTransferTo(headerLogo, 'afterend').transfer();
}
