//import './../../../../components/HeaderTypeTwo/HeaderTypeTwo.js'

const headerWidgets = document.querySelector(".header-wrapper>div").insertAdjacentHTML("beforeend", "<div class='header_widgets'></div>")
const headerContainer = document.querySelector('.header-wrapper>div');
const cartI = document.querySelector('body .header-cart i');
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
  `<div class="header_widgets">${wishList}${cartI.outerHTML}</div>`,
);
/*
cart.remove();*/
