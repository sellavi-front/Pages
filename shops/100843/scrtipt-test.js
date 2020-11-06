import GridBannerGalleryTest from '../../modules/GridBannerGalleryTest/GridBannerGalleryTest.js';

const contentArea = document.querySelector('.titles');

if (location.href === 'https://internokids.ru/sales') {
  const grid = new GridBannerGalleryTest(contentArea);
  grid.render();

  // gridBannerGalleryTest.render();
}
