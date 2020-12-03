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

const cart = document.querySelector("#cart > i");
cart.classList.add('far');
cart.classList.remove('fal');

new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML).render();
headerWidgets.remove();

new CreateAddContainer(headerWidgets, 'beforeend', wishList).render();

new NavTranslateTo(headerLogo, 'afterend').translate();