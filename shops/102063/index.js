import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'

import '../../fixes/fixes.js';


if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.navigation-wrapper>div:first-child');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTemplate(headerWrapper);
}