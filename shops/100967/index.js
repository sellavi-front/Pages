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
// import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import BaseSender from '../../components/BaseSender/BaseSender.js';

import bootstrapClasses from './utils/bootstrapClasses.js';
import advantages from './utils/advantages.js';
import dataBannerContent from './utils/dataBannerContent.js';
import salesData from './utils/salesData.js';
import aboutData from './utils/aboutData.js';
import historyData from './utils/historyData.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const icons = {
  cart: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1606402883/Miru/assets/icons/icons8-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0_1_1_gqdqiq.png" alt="cart">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

if (document.querySelector('.wrapper')) {

  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');
  const megalineLi = document.querySelectorAll('.megaline>div>ul>li');
  const productItem = document.querySelectorAll('.product-item');
  const footerRow = document.querySelector('footer > div.footer-widgets > div.container > div');
  const notActiveLink = document.querySelectorAll("body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu > a");
  const link = document.querySelectorAll("body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu.active > ul > li > div > div > span > a")
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);

  // Icons in header cont
    const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
    const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

    const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

    hideCart.remove();
  // End

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
  );

  // const socialIconsTypeOne = new SocialIconsTypeOne(
  //   document.querySelector('.footer-widgets>.container'),
  //   'beforeEnd',
  // );

  // FOOTER
  baseSender.render();
  // socialIconsTypeOne.render();
  buttonsInHeader.setTemplate();
  delSelectorsProductItem.findAndDelete();

  hideCart.remove();
  navWrapperCon.classList.remove('container');


  megalineLi.forEach((it) => {
    it.insertAdjacentHTML('beforeend', `<i class="fal fa-chevron-right"></i>`);
  });

  footerRow.remove();
  notActiveLink.forEach(el => {
    el.removeAttribute('href');
  })

  link.forEach(el => {
    el.removeAttribute('href');
  })

  const qty = document.querySelector(".cart-qty-circle");
  const qtyNum = +qty.textContent.trim();

  if (qtyNum > 0) {
    qty.style.background = 'rgba(240, 10, 10, .9)'
  } else {
    qty.style.cssText = `
      color: black;
      border-color: black;
    `
  }

  const buttonList = document.querySelector('.button__list');
  buttonList.insertAdjacentHTML('beforeend', `<li class="button__list_elem custom__text"><p class="custom__text_ph"></p></li>`);

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
  const title = document.querySelector('.product-title');


  const ratingArr = [rating, reviews];
  const titleCont = [title, productAvailability];

  const social = document.querySelector('.share_page_wrapper');

  const onDelete = [model, description, addReview, rating, reviews, productRating, social, title, productAvailability];

  const getOuterHTML = (arr) => arr.map( item => item.outerHTML);

  const createContainerForRaiting = new CreateAddContainer(productAvailability, 'afterend', getOuterHTML(ratingArr));
  const deleteEl = new DeleteElements(onDelete);

  productContainer.insertAdjacentHTML('afterend', description.outerHTML);
  productAvailability.insertAdjacentHTML('afterend', `
    <div class="price-cont">
      <div class="rating-cont">${getOuterHTML(ratingArr).join('')}</div>
    </div>`);
  createContainerForRaiting.render();

  const priceCont = document.querySelector('.price-cont');

  priceCont.insertAdjacentHTML('afterbegin', getOuterHTML(titleCont).join(''));

  ratingArr.forEach(el => el.remove());

  deleteEl.remove();
  document.querySelector("#home > div > div > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2)").childNodes[3].remove();

  document.querySelector("#home > div > div > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2) > div.price-cont > div.rating-cont > a").text.substr(0,2);

  if (document.querySelector('.comments')) {
    const date = document.querySelector('#review > div.comments > div > div > span');
    const commentMeta = document.querySelector('#review > div.comments > div > div > p.comment-meta');
    commentMeta.insertAdjacentHTML('beforeend', date.outerHTML);

  }
}
