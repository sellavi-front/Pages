import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js'

import '../../fixes/js/Alert/Alert.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js'
import '../../fixes/js/ChangeErrorEessage/ChangeErrorMessage.js'
// import '../../fixes/js/FooterCopy/FooterCopy.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

import FormBasic from '../../components/FormBasic/FormBasic.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import ColorChoise from '../../components/ColorChoise/ColorChoise.js';

import senderData from './utils/senderData.js';
import socialIcons from './utils/social-icons.js';

if (document.querySelector('.common-home')) {

  // reset cut image in categories
  const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
  imgCat.forEach(cat => {
    const src = cat.getAttribute('src');

    let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');

    cat.setAttribute('src', replacedSrc);
  })
  // rend reset cit img

  const latestSection = document.querySelector('.page-section.latest-section > .container');

  const sender = new FormBasic(latestSection, 'beforeend', senderData);
  sender.render();

  latestSection.querySelector('.container').classList.remove('container')

  const senderForm = document.querySelector('.sender-basic form');
  const dataForm = {};
  senderForm.addEventListener('input', (e) => {
    if (e.target.getAttribute('name') === 'userName') {
      dataForm.name = e.target.value;
    }

    if (e.target.getAttribute('name') === 'phone') {
      dataForm.phone = e.target.value;
    }
  })

  senderForm.querySelector('button').addEventListener('click', () => {
    window.open(`https://wa.me/79267979561?text=Здравствуйте!%0AМеня%20зовут.%0A${dataForm.name}%20Я%20заинтереосваляс%20вашим%20товаром.%20Пожалуйста%20свяжитесь%20со%20мной%20${dataForm.phone}`, '_blank');
  });

}

if (document.querySelector('.wrapper')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOne(footerContainer, 'beforeend', socialIcons).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}

if (document.querySelector('.product-product')) {
  const colorChoise = new ColorChoise()
  colorChoise.render();
}