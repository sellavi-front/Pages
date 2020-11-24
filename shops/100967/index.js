import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import AdvantagesTypeOne from '../../components/AdvantagesTypeOne/AdvantagesTypeOne.js';
import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';

import bootstrapClasses from './utils/bootstrapClasses.js';
import advantages from './utils/advantages.js';
import dataBannerContent from './utils/dataBannerContent.js'

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

  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);
  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

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
}

if (document.querySelector('.common-home')) {
  console.log(document.querySelector('.content-area>.container'));
  const advantagesTypeOne = new AdvantagesTypeOne(document.querySelector('.page-section'), advantages);
  const contentBanner = new ContentBannerTypeOne(document.querySelector('.content-area>.container'), dataBannerContent)

  advantagesTypeOne.render();
  contentBanner.render();
}
