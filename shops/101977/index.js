import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import objBanner from './utils/bannerText.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import dataAbout from './utils/aboutData.js';

const bigBanner = new BigBanner('https://res.cloudinary.com/dtqqfmyqb/image/upload/v1606724800/jan-kopriva-sh_7sFEFICI-unsplash_1_gc6uba.png', objBanner);
bigBanner.render()

const imgNearText = new ImgNearText(
  document.querySelector('body>.wrapper>.content-area>.page-section'),
  'beforeEnd',
  dataAbout,
);

imgNearText.render();

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

document.querySelector('#home > div > div > section > div.about > div > div > div > div > h2').insertAdjacentHTML('beforeend', '<div class="flex-logo-text"><div class="thisLogo"></div><div class="thisLogoText">Al`DOMA</div></div>');

// document.querySelector('body>.wrapper>.content-area>.page-section').insertAdjacentHTML('beforeend', '<div class="leader"></div>');
// document.querySelector('#home > div > div > section > div.leader').insertAdjacentHTML('afterbegin', '<div><div class="leader-title">Станьте дилером и получите<p>дополнительные преимущества</p></div>');
// document.querySelector('.leader').insertAdjacentHTML('beforeend', '<div class="three-flex-block"><div class="first-block"><div class="left-side block1"></div><div class="right-side block1">Выгодные цены</div></div><div class="second-block"><div class="left-side block2"></div><div class="right-side block2">Бесплатную доставку</div></div><div class="third-block"><div class="left-side block3"></div><div class="right-side block3">Бонусы по итогам года</div></div></div>');
// document.querySelector('.leader').insertAdjacentHTML('beforeend', '<button type="button" class="be-leader">Стать лидером</button>');
document.querySelector('.about').insertAdjacentHTML('afterend', '<div class="leader"><div class="container"><div class="leader-title">Станьте дилером и получите<p>дополнительные преимущества</p></div><div class="three-flex-block"><div class="first-block"><div class="left-side block1"></div><div class="right-side block1">Выгодные цены</div></div><div class="second-block"><div class="left-side block2"></div><div class="right-side block2">Бесплатную доставку</div></div><div class="third-block"><div class="left-side block3"></div><div class="right-side block3">Бонусы по итогам года</div></div></div><button type="button" class="be-leader">Стать лидером</button></div></div>');
document.querySelector('body>.wrapper>.content-area>.page-section').insertAdjacentHTML('beforeend', '<div class="map-flex"><div class="container"><div class="our-contacts"><div>Контакты</div><div class="adress"><div>Адрес: </div><div>г.Волгоград, ул.Бурейская, д.8</div></div><div class="phone"><div>Телефон: </div><div>Техническая служба</div><div>Отдел продаж</div></div><div class="emails"><div>E-mail: </div><div>Ссылка</div></div></div><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7efb2b1c48455fd2e1c95a8256260ab3e86490a95490800b620cd291dff510af&amp;source=constructor" width="600" height="400" frameborder="0"></iframe></div></div>');
document.querySelector('.footer').remove();