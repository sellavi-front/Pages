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

const oldNavBar = document.querySelector('#home > div > header > div.navigation-wrapper > div > nav');
const newNavBar = oldNavBar.cloneNode(true);
document.querySelector('#search').insertAdjacentHTML('beforebegin', newNavBar.outerHTML);
oldNavBar.remove();

document.querySelector('#search > div.search_field > input').removeAttribute('placeholder');

document.querySelector('#home > div > header > div.header-wrapper > div.container > nav').insertAdjacentHTML('beforebegin', '<span>AL`DOMA</span>');

document.querySelector('#home > div > div > div.main-slider.content_center > div.custom_banner > div > div > div.banner__caption > h1').insertAdjacentHTML('beforeend', '<div>От производителя оптом и в розницу</div>');

document.querySelector('#home > div > div > div.main-slider.content_center > div.custom_banner > div > div > div.banner__caption').insertAdjacentHTML('beforeend', '<div class="mini-flex"><div class="flex-item-i lab"><div class="second-mini-flex"><div class="flex-image images"></div><div class="flex-image texto">Лабораторный контроль продуции</div></div><div class="flex-item-i quality"><div class="second-mini-flex"><div class="flex-image images"></div><div class="flex-image texto">Высококачественное сырье</div></div></div></div>');