import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
//import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'


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


document.querySelector('.container-fluid').setAttribute('class', 'container');

document.querySelector('.custom_banner').insertAdjacentHTML('afterbegin', '<div class="container"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1607946453/young-classical-ballet-girl-dance-class_1_pbnrid.png"></img></div>');

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Окутина Марина Юрьевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Окутина Марина Юрьевна', media);
  req.setTemplate();
}

if (screen.width <= '480px') {
  document.querySelector('.logo').insertAdjacentHTML('beforeend', '<div class="logoName">AL`DOMA</div>');
}
//test