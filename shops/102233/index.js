// import Requisites from '../../modules/Requisites/Requisites.js';
// import requsites from './utils/requsites.js'
import contactData from './utils/contactData.js'
import socIconsData from './utils/socIconsData.js';

import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
// import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'


if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();

  /* set banner img */
  const setBanner = () => {
    const img = document.querySelector('.owl-item picture img');
    const srcSet = document.querySelector('.owl-item picture source')

    img.setAttribute('src', 'https://res.cloudinary.com/gz-company/image/upload/v1607526921/festive-christmas-cozy-atmosphere-with-home-decor_1_qs8lmf.png');
    srcSet.setAttribute('srcset', 'https://res.cloudinary.com/gz-company/image/upload/v1607526921/festive-christmas-cozy-atmosphere-with-home-decor_1_qs8lmf.png');
  }

  setBanner();
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOne(footerContainer, 'beforeend', socialIcons).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');
}


// if (location.href.includes('term-of-use')) {
//   const req = new Requisites(requsites, 'beforeend', 'ИП Абдинов Эльдар Гейдар Оглы');
//   req.setTemplate();
// }

// if (location.href.includes('contact')) {
//   const media = document.querySelector('.contact-info > .media-list > .media:last-child');

//   const req = new Requisites(requsites, 'afterend', 'ИП Абдинов Эльдар Гейдар Оглы', media);
//   req.setTemplate();
// }
