import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';

import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

import AdvantagesTypeOne from '../../components/AdvantagesTypeOne/AdvantagesTypeOne.js';
// import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
// import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import HistoryLine from '../../components/HistoryLine/HistoryLine.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
import RatingWithImgText from '../../components/RatingWithImgText/RatingWithImgText.js';
import BaseSender from '../../components/BaseSender/BaseSender.js';

import bootstrapClasses from './utils/bootstrapClasses.js';
import advantages from './utils/advantages.js';
// import dataBannerContent from './utils/dataBannerContent.js';
// import salesData from './utils/salesData.js';
import aboutData from './utils/aboutData.js';
import historyData from './utils/historyData.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const icons = {
  cart:
    '<img src="https://res.cloudinary.com/depgheppz/image/upload/v1611136009/Vector_opwga3.svg" alt="cart">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

const textInHeader = 'Бесплатная доставка по России';
const footerText = 'Имеются противопоказания. Проконсультируйтесь со специалистом';

if (document.querySelector('.wrapper')) {
  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');
  const megalineLi = document.querySelectorAll('.megaline>div>ul>li');
  const productItem = document.querySelectorAll('.product-item');
  const bsMenutoggle = document.querySelector('.bs-menu-toggle');
  const footerContainer = document.querySelector('footer>.footer-widgets>div');
  const notActiveLink = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu > a',
  );
  const link = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu.active > ul > li > div > div > span > a',
  );
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);

  const logo = document.querySelector('#cart');
  const logoIco = document.querySelector('#cart > i');
  logoIco.remove();
  logo.insertAdjacentHTML('afterbegin', icons.cart);

  document.querySelector('.header-wrapper > .container').classList.add('container-fluid');
  document.querySelector('.header-wrapper > .container').classList.remove('container');

  // Icons in header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  hideCart.remove();
  // End

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
    'Остались вопросы?',
  );

  footerContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="phh">
      <p style="
        font-size: 24px;
        text-transform: uppercase;
        color: rgba(100,100,100,.5);
        text-align: center;
      ">${footerText}
      </p>
    </div>
  `,
  );

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

  // footerRow.remove();
  notActiveLink.forEach((el) => {
    el.removeAttribute('href');
  });

  link.forEach((el) => {
    el.removeAttribute('href');
  });

  const qty = document.querySelector('.cart-qty-circle');
  const qtyNum = +qty.textContent.trim();

  if (qtyNum > 0) {
    qty.style.cssText =
      'background: rgba(240, 10, 10, .9) !important; color: white !important; border-color: white !important;';
  } else {
    qty.style.cssText = `
      color: black;
      border-color: black;
    `;
  }

  const buttonList = document.querySelector('.button__list');
  buttonList.insertAdjacentHTML(
    'beforeend',
    `<li class="button__list_elem custom__text"><p class="custom__text_ph">${textInHeader}</p></li>`,
  );

  const disLinkHeader = document.querySelectorAll(
    '.megamenu > ul > .megaline > div > div > span > a',
  );
  disLinkHeader.forEach((link) => link.removeAttribute('href'));
  bsMenutoggle.remove();

  // const brg = document.querySelector('.mobile-navigation-wrapper');
  // document
  //   .querySelector('.header-wrapper > .container-fluid')
  //   .insertAdjacentHTML('afterbegin', brg.outerHTML);
  // brg.remove();

  setTimeout(() => {
    document.querySelector('.prevent_touch_banner.d-none').insertAdjacentHTML(
      'afterend',
      `
        <div class="mobile-navigation-close">
          <i class="fal fa-times"></i>
        </div>
      `,
    );
  }, 500);

  document.querySelector('.mobile-navigation-wrapper').addEventListener('click', (e) => {
    document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
      const nav = document.querySelector('.navigation');
      nav.classList.add('nav-closed');
      nav.classList.remove('nav-opened');
      document.querySelector('body').classList.remove('overflow-hidden');
    });
  });
}

if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('.page-section');

  const product = document.querySelectorAll('.product-item');

  let twoWeek = document.createElement('div');
  let oneMonth = document.createElement('div');
  let row1 = document.createElement('div');
  let row2 = document.createElement('div');
  let titleWeek = document.createElement('h2');
  let titleWeekSpan = document.createElement('span');
  let titleMonth = document.createElement('h2');
  let titleMonthSpan = document.createElement('span');

  twoWeek.classList.add('container', 'twoWeek');
  oneMonth.classList.add('container', 'oneMonth');
  row1.classList.add('row', 'products', 'grid');
  row2.classList.add('row', 'products', 'grid');
  titleWeek.classList.add('section-title', 'mb-4', 'mt-4');
  titleMonth.classList.add('section-title', 'mb-4', 'mt-4');

  pageSection.append(twoWeek);
  pageSection.append(oneMonth);

  titleWeekSpan.textContent = 'Двухнедельные линзы';
  titleMonthSpan.textContent = 'Линзы месячного ношения';

  const monthCont = document.querySelector('.oneMonth');
  const weekCont = document.querySelector('.twoWeek');

  monthCont.append(row1);
  weekCont.append(row2);

  weekCont.prepend(titleWeek);
  monthCont.prepend(titleMonth);
  titleWeek.append(titleWeekSpan);
  titleMonth.append(titleMonthSpan);

  const monthRow = document.querySelector('.oneMonth>.products');
  const weekRow = document.querySelector('.twoWeek>.products');
  const monthArr = ['688', '687', '4441', '977'];
  const weekArr = ['668', '4426'];

  product.forEach(function (i) {
    const attr = i.getAttribute('data-product_id');

    if (attr === '688' || attr === '687' || attr === '4441' || attr === '977') {
      monthRow.append(i);
    }
    if (attr === '668' || attr === '4426') {
      weekRow.append(i);
    }
  });
  const advantagesTypeOne = new AdvantagesTypeOne(
    document.querySelector('.page-section'),
    advantages,
  );
  // const contentBanner = new ContentBannerTypeOne(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   dataBannerContent,
  // );
  // const infoCardTypeOne = new InfoCardTypeOne(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   salesData,
  // );

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
  // contentBanner.render();
  // infoCardTypeOne.render();
  imgNearText.render();
  historyLine.render();
  gridPhotoWithText.render();

  // const bannerContentItemImg = document.querySelector('.banner-content__item');

  // // Коробка которая вылезает за баннер
  // bannerContentItemImg.insertAdjacentHTML(
  //   'afterbegin',
  //   `<img class="img-1" src="https://res.cloudinary.com/gz-company/image/upload/v1606223895/Miru/Group_88_1_lfzmtk.png">`,
  // );
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

  // const social = document.querySelector('.share_page_wrapper');

  const onDelete = [
    model,
    description,
    addReview,
    rating,
    reviews,
    productRating,
    // social,
    title,
    productAvailability,
  ];

  const getOuterHTML = (arr) => arr.map((item) => item.outerHTML);

  const createContainerForRaiting = new CreateAddContainer(
    productAvailability,
    'afterend',
    getOuterHTML(ratingArr),
  );
  const deleteEl = new DeleteElements(onDelete);

  productContainer.insertAdjacentHTML('afterend', description.outerHTML);
  productAvailability.insertAdjacentHTML(
    'afterend',
    `
    <div class="price-cont">
      <div class="rating-cont">${getOuterHTML(ratingArr).join('')}</div>
    </div>`,
  );
  createContainerForRaiting.render();

  const priceCont = document.querySelector('.price-cont');

  priceCont.insertAdjacentHTML('afterbegin', getOuterHTML(titleCont).join(''));

  ratingArr.forEach((el) => el.remove());

  deleteEl.remove();
  document
    .querySelector('body > div > div > section:nth-child(1) .product-single > div:nth-child(2)')
    .childNodes[3].remove();

  document
    .querySelector(
      '#home > div > div > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2) > div.price-cont > div.rating-cont > a',
    )
    .text.substr(0, 2);

  if (document.querySelector('.comments')) {
    const date = document.querySelector('#review > div.comments > div > div > span');
    const commentMeta = document.querySelector(
      '#review > div.comments > div > div > p.comment-meta',
    );
    commentMeta.insertAdjacentHTML('beforeend', date.outerHTML);
  }
}

if (document.querySelector('.product-product')) {
  // document.querySelectorAll('#tab-description > span > ul').forEach((el) => {
  //   el.insertAdjacentHTML(
  //     'beforebegin',
  //     `<div class="tab-content__content">
  // ${el.previousSibling.outerHTML} ${el.outerHTML}
  // </div>`,
  //   );
  //   el.previousSibling.previousSibling.remove();
  //   el.remove();
  // });

  // document.querySelectorAll('#tab-description > span > ul').forEach((el) => {
  //   el.insertAdjacentHTML(
  //     'beforebegin',
  //     `<div class="tab-content__content">
  // ${el.previousSibling.outerHTML} ${el.outerHTML}
  // </div>`,
  //   );
  //   el.previousSibling.remove();
  //   el.remove();
  // });

  // const content = document.querySelector('.tab-content__content');
  // const contents = document.querySelectorAll('.tab-content__content');
  // content.insertAdjacentHTML('beforebegin', `<div class="tab-content__container"></div>`);

  // const container = document.querySelector('.tab-content__container');
  // contents.forEach((el) => {
  //   container.insertAdjacentHTML('beforeend', el.outerHTML);
  //   el.remove();
  // });
}
