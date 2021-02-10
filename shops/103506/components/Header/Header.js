//import './../../../../components/HeaderTypeTwo/HeaderTypeTwo.js'

const headerContainer = document.querySelector('.common-home > div > header > div.header-wrapper > div.container-fluid')
const cartI = document.querySelector('body .header-cart i')
cartI.classList.add('far');
cartI.classList.remove('fal');
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

headerContainer.insertAdjacentHTML(
  'beforeend',
  `<div class="header_widgets">${wishList}</div>`,
);
/*
cart.remove();*/
