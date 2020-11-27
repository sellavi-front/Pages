import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import Requisites from '../../modules/Requisites/Requisites.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';

import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js'

import requsites from './utils/requsites.js'
import dataBannerContent from './utils/dataBannerContent.js'
import bootstrapClasses from './utils/bootstrapClasses.js';
import dataAbout from './utils/dataAbout.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';

if (document.querySelector('.wrapper')) {
// Icons im header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTemplate();
  hideCart.remove();
// End

  const bigBanner = new BigBanner('https://res.cloudinary.com/gz-company/image/upload/v1606466129/ThaiCosmetic/Group_73_yqnh52.png');
  bigBanner.render()
}

if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('.page-section');
  const sectionCustom = document.querySelector('.custom_section');

  const saleBanner = new ContentBannerTypeOne(sectionCustom, 'afterbegin', dataBannerContent);
  const imgNearText = new ImgNearText(sectionCustom, 'beforeend', dataAbout)
  const social = new SocIconsTypeOne(sectionCustom, 'beforeend')

  saleBanner.render();
  imgNearText.render();
  social.render()

  const bannerContentItemBg = document.querySelector('.banner-content__item_bg > picture');
  bannerContentItemBg.insertAdjacentHTML('afterbegin', `<source media="(max-width: 495px)" src="https://res.cloudinary.com/gz-company/image/upload/v1606481504/ThaiCosmetic/Group_75_lfbifj.png"> </source>`)

  pageSection.insertAdjacentHTML('beforeend', `<img class="img-bg img-bg_r" src="https://res.cloudinary.com/gz-company/image/upload/v1606479718/ThaiCosmetic/image_3_fe6p69.png">`)

pageSection.insertAdjacentHTML('beforeend', `<img class="img-bg_l" src="https://res.cloudinary.com/gz-company/image/upload/v1606479718/ThaiCosmetic/image_3_1_cmzi4q.png">`)

}

if (document.querySelector('.product-item')) {
  const productItem = document.querySelectorAll('.product-item');
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);
  delSelectorsProductItem.findAndDelete();
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА', media);
  req.setTemplate();
}
