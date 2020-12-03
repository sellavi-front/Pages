import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import NavTranslateTo from '../../modules/NavTranslateTo/NavTranslateTo.js';

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
console.log(headerWidgets);
new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML).render();
headerWidgets.remove();

headerWidgets.insertAdjacentHTML('afterbegin', wishList);

new NavTranslateTo(headerLogo, 'afterend').translate();