import GridBannerGallery from '../../modules/GridBannerGallery/GridBannerGallery.js';

const contentArea = document.querySelector('body.common-home>.content-area');

const gridBannerGallery = new GridBannerGallery(contentArea);

gridBannerGallery.render();
