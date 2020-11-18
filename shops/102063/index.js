import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'

import '../../fixes/fixes.js';


if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
  const linkcatalog = document.querySelector('.flexy.has_children:first-child');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTemplate(headerWrapper);
  hideCart.remove();

  linkcatalog.insertAdjacentHTML('afterbegin', `<i class="fas fa-bars"></i>`);
}