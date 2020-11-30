// import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';

// Icons in header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTempate();
  hideCart.remove();
// End
