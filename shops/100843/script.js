import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';

const contentArea = document.querySelector('.common-home .content-area');

if (
  location.href === 'https://internokids.ru/' ||
  location.href === 'https://internokids.ru/?from_admin'
) {
  const gridBannerGallery = new GridBannerGallery(contentArea);

  gridBannerGallery.render();
}
