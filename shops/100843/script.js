import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js'

import { ChangeAgreement } from '../../fixes/fixes.js';
import content from './content/content.js';

const contentArea = document.querySelector('.common-home .content-area');

if (
  location.href === 'https://internokids.ru/' ||
  location.href === 'https://internokids.ru/?from_admin'
) {
  const gridBannerGallery = new GridBannerGallery(contentArea, content);
  gridBannerGallery.render();

  const productItem = document.querySelectorAll('.product-item');
  const bootstrapClasses = [
    'col-lg-4',
    'col-xl-3',
    'mb-0',
    'mb-md-4',
    'col-12',
    'col-sm-6',
    'col-md-6',
    'col-lg-6',
    'col-xl-4',
    'mb-4',
  ];

  const deleteClassses = new DeleteClasses(productItem, bootstrapClasses);
  deleteClassses.findAndDelete();
}

if (document.querySelector('body').classList.contains('product-product')) {
  const btnPrice = document.querySelector('.btn-price');
  const price = document.querySelector('.product-price');
  const buttonAddCart = document.querySelector('#button-cart');

  btnPrice.insertAdjacentElement('afterbegin', price);
  btnPrice.insertAdjacentElement('beforeend', buttonAddCart);
}

if (location.href.includes('checkout')) {
  const changeAgree = new ChangeAgreement(document);
  changeAgree.change();
}
