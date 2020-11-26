import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js'

import AdvantagesTypeOne from '../../components/AdvantagesTypeOne/AdvantagesTypeOne.js';
import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import HistoryLine from '../../components/HistoryLine/HistoryLine.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import BaseSender from '../../components/BaseSender/BaseSender.js';

import bootstrapClasses from './utils/bootstrapClasses.js';
import advantages from './utils/advantages.js';
import dataBannerContent from './utils/dataBannerContent.js';
import salesData from './utils/salesData.js';
import aboutData from './utils/aboutData.js';
import historyData from './utils/historyData.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const icons = {
  cart: '<i class="far fa-shopping-bag"></i>',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');
  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');
  const megalineLi = document.querySelectorAll('.megaline>div>ul>li');
  const productItem = document.querySelectorAll('.product-item');
  const footerRow = document.querySelector('footer > div.footer-widgets > div.container > div');

  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);
  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
  );

  const socialIconsTypeOne = new SocialIconsTypeOne(
    document.querySelector('.footer-widgets>.container'),
    'beforeEnd',
  );

  // FOOTER
  baseSender.render();
  socialIconsTypeOne.render();
  buttonsInHeader.setTemplate();
  delSelectorsProductItem.findAndDelete();

  const icoUser = document.querySelector('.button__list > .icon-user');

  hideCart.remove();
  icoUser.remove();
  navWrapperCon.classList.remove('container');

  console.log(icoUser);

  megalineLi.forEach((it) => {
    it.insertAdjacentHTML('beforeend', `<i class="fal fa-chevron-right"></i>`);
  });

  footerRow.remove();
}

if (document.querySelector('.common-home')) {
  console.log(document.querySelector('body>.wrapper>.content-area>.container'));
  const advantagesTypeOne = new AdvantagesTypeOne(
    document.querySelector('.page-section'),
    advantages,
  );
  const contentBanner = new ContentBannerTypeOne(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    dataBannerContent,
  );
  const infoCardTypeOne = new InfoCardTypeOne(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    salesData,
  );

  const imgNearText = new ImgNearText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    aboutData,
  );

  const historyLine = new HistoryLine(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    historyData,
  );
  const gridPhotoWithText = new GridPhotoWithText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
  );

  advantagesTypeOne.render();
  contentBanner.render();
  infoCardTypeOne.render();
  imgNearText.render();
  historyLine.render();
  gridPhotoWithText.render();

  const bannerContentItemImg = document.querySelector('.banner-content__item');

  // Коробка которая вылезает за баннер
  bannerContentItemImg.insertAdjacentHTML(
    'afterbegin',
    `<img class="img-1" src="https://res.cloudinary.com/gz-company/image/upload/v1606223895/Miru/Group_88_1_lfzmtk.png">`,
  );
}

if (document.querySelector('.product-product')) {
  const description = document.querySelector('.tab-pane');
  const productContainer = document.querySelector('.product-single');
  const model = document.querySelector('.table_holder');
  const productRating = document.querySelector('.product-rating');
  const productAvailability = document.querySelector('.product-availability');
  const addReview = document.querySelector('.add-review');
  const rating = document.querySelector('.rating');
  const reviews = document.querySelector('.reviews');
  const ratingArr = [rating, reviews];
  const social = document.querySelector('.share_page_wrapper');

  const onDelete = [model, description, addReview, rating, reviews, productRating, social];

  const getOuterHTML = (arr) => arr.map( item => item.outerHTML);

  const createContainerForRaiting = new CreateAddContainer(productAvailability, 'afterend', getOuterHTML(ratingArr));
  const deleteEl = new DeleteElements(arr);

  productContainer.insertAdjacentHTML('afterend', description.outerHTML);
  productAvailability.insertAdjacentHTML('afterend', `<div class="rating-cont">${getOuterHTML(ratingArr)}</div>`);
  createContainerForRaiting.render();

  deleteEl.remove();
}
