import GridBannerGalleryTest from '../../modules/GridBannerGalleryTest/GridBannerGalleryTest.js';

const contentArea = document.querySelector('.titles');

if (location.href === 'https://internokids.ru/sales') {
  new GridBannerGalleryTest(contentArea);

  // gridBannerGalleryTest.render();
}
