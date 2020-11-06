import GridBannerGalleryTest from '../../modules/GridBannerGalleryTest/GridBannerGalleryTest.js';
import content from './content/content';

const contentArea = document.querySelector('.titles');


if (location.href === 'https://internokids.ru/sales/') {
  const grid = new GridBannerGalleryTest(contentArea, content);
  grid.render();

  // gridBannerGalleryTest.render();
}
