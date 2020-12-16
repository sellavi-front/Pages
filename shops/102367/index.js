import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

import '../../components/FormBasic/FormBasic.js';

import senderData from './utils/senderData.js';

if (document.querySelector('.common-home')) {
  const cstmSection = document.querySelector('.custom_section');

  const sender = new FormBasic(cstmSection, 'beforeend', senderData);
  sender.render();
}