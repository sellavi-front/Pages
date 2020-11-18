import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'
import SmallCategory from '../../components/SmallCategory/SmallCategory.js'
import { DeleteClasses } from '../../modules/modules.js';
import '../../fixes/fixes.js';

const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-md-3',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
  'container'
];

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
  const linkCatalog = document.querySelector('.flexy.has_children:first-child');
  const pageSection = document.querySelector('.page-section');
  const pageSectionContainer = pageSection.querySelector('.container');
  const productItem =  document.querySelectorAll('.product-item');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);
  const delClasses = new DeleteClasses(pageSectionContainer, bootstrapClasses)
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses)

  buttonsInHeader.setTemplate(headerWrapper);
  hideCart.remove();

  linkCatalog.insertAdjacentHTML('afterbegin', `<i class="fas fa-bars"></i>`);
  pageSectionContainer.classList.add('container-fluid');

  delClasses.findAndDelete();
  delSelectorsProductItem.findAndDelete();
}

