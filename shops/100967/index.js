import '../../modules/ButtonListInHeader/ButtonListInHeader.js'

const headerWrapper = document.querySelector('.header-wrapper>div:first-child');

const buttonsInHeader = new ButtonListInHeader(headerWrapper);

buttonsInHeader.setTemplate(headerWrapper);
