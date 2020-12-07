import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'
import SmallCategory from '../../components/SmallCategory/SmallCategory.js'
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import SmallImgSlider from '../../components/SmallImgSlider/SmallImgSlider.js';

import sliderData from './utils/sliderData.js';
import bootstrapClasses from './utils/bootstrapClasses.js';
import dataSmallCat from './utils/dataSmallCat.js'


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
  //hideCart.remove();

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

//document.querySelector('#home > div > header > div.navigation-wrapper').insertAdjacentHTML('afterbegin', '<div><a href="https://store102063.sellavi.com/"></a></div>');


/* description */
// const oldNode = document.querySelector('#tab-description');
// let newNode = oldNode.cloneNode(true)
// document.querySelector(".product-item").insertAdjacentHTML("afterend", newNode.outerHTML)
// oldNode.remove()


