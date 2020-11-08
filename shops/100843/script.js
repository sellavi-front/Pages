import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';
import AddElemInContainer from '../../modules/AddElemInContainer/AddElemInContainer.js';
import ChangeAgreement from '../../modules/ChangeAgreement/ChangeAgreement.js';
import content from './content/content.js';

const contentArea = document.querySelector('.common-home .content-area');

if (
  location.href === 'https://internokids.ru/' ||
  location.href === 'https://internokids.ru/?from_admin'
) {
  const gridBannerGallery = new GridBannerGallery(contentArea, content);

  gridBannerGallery.render();
}

if (document.querySelector('body').classList.contains('product-product')) {
  const btnPrice = document.querySelector('.btn-price');
  const price = document.querySelector('.product-price');
  const buttonAddCart = document.querySelector('#button-cart');

  const addElem = new AddElemInContainer(document, price, btnPrice);
  const addBtn = new AddElemInContainer(document, buttonAddCart, btnPrice);

  addBtn.render();
  addElem.render();
}

if (location.href.includes('checkout')) {
  const changeAgree = new ChangeAgreement(document);
  changeAgree.change();
}
