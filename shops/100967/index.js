import ButtonListInHeader from  '../../modules/ButtonListInHeader/ButtonListInHeader.js'

const icons = {
  cart: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863312/Miru/assets/bag-black_li2hqx.svg">',
  like: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
}

const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
const icoUser = document.querySelector('.button__list_elem.icon-user');
const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

buttonsInHeader.setTemplate();
hideCart.remove();
icoUser.remove();

console.log(icoUser);