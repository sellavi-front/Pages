import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import NavTranslateTo from '../../modules/NavTranslateTo/NavTranslateTo.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLogo = document.querySelector('.header-wrapper .logo');

new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML).render();
headerWidgets.remove();

new NavTranslateTo(headerLogo, 'afterend').translate();