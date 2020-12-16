import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

import FormBasic from '../../components/FormBasic/FormBasic.js';

import senderData from './utils/senderData.js';

if (document.querySelector('.common-home')) {
  const latestSection = document.querySelector('.page-section.latest-section');

  const sender = new FormBasic(latestSection, 'beforeend', senderData);
  sender.render();
}