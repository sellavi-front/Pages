import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
//import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {

  /* Remove bootstrap col width seclector */
  const footerWidgetsCol = document.querySelectorAll('.footer-widgets > div > div > div');
  footerWidgetsCol.forEach(el => {
    el.classList.remove('col-md-3');
  })
  /* Add title for soc icons */


  const catergoryBanners = document.querySelector('.homefeatured_category>div');
  if (catergoryBanners) {
    catergoryBanners.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4"><span> Категории </span></h2>`)
  }
}

document.querySelector('.custom_banner').insertAdjacentHTML('afterbegin', '<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1611666346/Component_1_lilp3a.png"></img></div>');

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Окутина Марина Юрьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Окутина Марина Юрьевна', media);
  req.setTemplate();
}

//test

if (document.querySelector('.header-wrapper')) {
  document.querySelector('.navigation_black_screen').remove();
}