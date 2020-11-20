import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';

const icons = {
  cart:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863312/Miru/assets/bag-black_li2hqx.svg">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);
  const icoUser = document.querySelector('.icon-user');
  buttonsInHeader.setTemplate();

  hideCart.remove();
  icoUser.remove();
  navWrapperCon.remove();

  console.log(icoUser);
}
