import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'
import SmallCategory from '../../components/SmallCategory/SmallCategory.js'
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import SmallImgSlider from '../../components/SmallImgSlider/SmallImgSlider.js';
import '../../fixes/fixes.js';

import sliderData from './utils/sliderData.js';
import bootstrapClasses from './utils/bootstrapClasses.js';
import dataSmallCat from './utils/dataSmallCat.js'

/* catalog add sections */
document.querySelector('#home > div > footer > div.footer-widgets > div.container-fluid > div').insertAdjacentHTML('beforeend', '<div class="col-md-3"><div class="widget widget-categories"><h4 class="widget-title">Каталог</h4><ul><li><a href="https://store102063.sellavi.com/%D0%B0%D0%BA%D0%B2%D0%B0%D1%84%D0%BE%D1%80/" role="link">Аквафор</a></li><li><a href="https://store102063.sellavi.com/%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80/" role="link">Барьер</a></li><li><a href="https://store102063.sellavi.com/%D0%B3%D0%B5%D0%B9%D0%B7%D0%B5%D1%80/" role="link">Гейзер</a></li></ul></div></div>');



if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
  const linkCatalog = document.querySelector('.flexy.has_children:first-child');
  const pageSection = document.querySelector('.page-section');
  const pageSectionContainer = pageSection.querySelector('.container');
  const productItem =  document.querySelectorAll('.product-item');
  const footerWidContainer = document.querySelector('.footer-widgets>.container');
  const navigationWrapperContainer = document.querySelector('.navigation-wrapper>.container');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses)

  buttonsInHeader.setTemplate(headerWrapper);
  hideCart.remove();

  linkCatalog.insertAdjacentHTML('afterbegin', `<i class="fas fa-bars"></i>`);

  navigationWrapperContainer.classList.add('container-fluid');
  navigationWrapperContainer.classList.remove('container');

  footerWidContainer.classList.add('container-fluid');
  footerWidContainer.classList.remove('container');

  pageSectionContainer.classList.add('container-fluid');
  pageSectionContainer.classList.remove('container');

  delSelectorsProductItem.findAndDelete();
}

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');

  const slider = new SmallImgSlider(sliderData, customSection);
  const smallCategory = new SmallCategory(dataSmallCat);

  smallCategory.render();
  slider.setTemplate();
  slider.setOptions();

}

/* description */
const oldNode = document.querySelector('#tab-description');
let newNode = oldNode.cloneNode(true)
document.querySelector(".product-item").insertAdjacentHTML("afterend", newNode.outerHTML)
oldNode.remove()

