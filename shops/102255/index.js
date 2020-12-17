import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import GetCategoriesFromNavbar from '../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js';
import imgArr from './utils/imgsArr.js';

let customSection = document.querySelector('custom_section') 
let getAllCategories = document.querySelectorAll('.nav.sf-menu > li')
let writeNewCategories = [].slice.call(getAllCategories, 1)

//let nodeList = document.querySelectorAll(".sf-menu > li")
  let categories = new GetCategoriesFromNavbar(Array.from(writeNewCategories), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()

// add user icon in header
document.querySelector('.header_widgets').insertAdjacentHTML('afterbegin', '<div class="header_user"><a id="user" class="position-relative" href="https://store102255.sellavi.com/login/" role="link"><i class="far fa-user"></i></a></div>');

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ООО"Санитары Столицы"');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ООО"Санитары Столицы"', media);
  req.setTemplate();
}