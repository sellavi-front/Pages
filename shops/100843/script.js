import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';
import AddElemInContainer from '../../modules/AddElemInContainer/AddElemInContainer.js';
const contentArea = document.querySelector('.common-home .content-area');

if (
  location.href === 'https://internokids.ru/' ||
  location.href === 'https://internokids.ru/?from_admin'
) {
  const gridBannerGallery = new GridBannerGallery(contentArea);

  gridBannerGallery.render();
}

if (document.querySelector('body').classList.contains('product-product')) {
  const addElem = new AddElemInContainer(document, price, btnPrice);
  const addBtn = new AddElemInContainer(document, buttonAddCart, btnPrice);

  addBtn.render();
  addElem.render();
}
