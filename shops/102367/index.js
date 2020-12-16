import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

import FormBasic from '../../components/FormBasic/FormBasic.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';

import senderData from './utils/senderData.js';

if (document.querySelector('.common-home')) {
  const latestSection = document.querySelector('.page-section.latest-section > .container');

  const sender = new FormBasic(latestSection, 'beforeend', senderData);
  sender.render();

  latestSection.querySelector('.container').classList.remove('container')
}

if (document.querySelector('.wrapper')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOne(footerContainer, 'beforeend').render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title oc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}