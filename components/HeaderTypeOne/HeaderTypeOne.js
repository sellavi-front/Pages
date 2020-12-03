import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');

new CreateAddContainer(headerContainer, 'beforeend', headerWidgets).render();
