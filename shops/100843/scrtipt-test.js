import GridBannerGalleryTest from '../../modules/GridBannerGalleryTest/GridBannerGalleryTest.js';

const contentArea = document.querySelector('.titles');

const bannerContent = [
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
];

if (location.href === 'https://internokids.ru/sales/') {
  const grid = new GridBannerGalleryTest(contentArea, bannerContent);
  grid.render();

  // gridBannerGalleryTest.render();
}
