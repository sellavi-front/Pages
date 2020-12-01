import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import objBanner from './utils/bannerText.js';

const bigBanner = new BigBanner('https://res.cloudinary.com/dtqqfmyqb/image/upload/v1606724800/jan-kopriva-sh_7sFEFICI-unsplash_1_gc6uba.png', objBanner);
bigBanner.render()

const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
const hideCart = document.querySelector('.header-wrapper>div>.header-cart');
const buttonsInHeader = new ButtonListInHeader(headerWrapper);
buttonsInHeader.setTemplate();
hideCart.remove();

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Гралько Людмила Викторовна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Гралько Людмила Викторовна', media);
  req.setTemplate();
}

