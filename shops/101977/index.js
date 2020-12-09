import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import objBanner from './utils/bannerText.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import dataAbout from './utils/aboutData.js';
import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import salesData from './utils/salesData.js';
import payDeliver from './utils/deliveryPay.js';
import FormBasic from '../../components/FormBasic/FormBasic.js';
import senderData from './utils/senderData.js';
import ButtonContainerInProduct from '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (location.pathname === '/') {
const bigBanner = new BigBanner('https://res.cloudinary.com/dtqqfmyqb/image/upload/v1606724800/jan-kopriva-sh_7sFEFICI-unsplash_1_gc6uba.png', objBanner);
bigBanner.render()

const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
const hideCart = document.querySelector('.header-wrapper>div>.header-cart');
const buttonsInHeader = new ButtonListInHeader(headerWrapper);
buttonsInHeader.setTemplate();
hideCart.remove();

const oldNavBar = document.querySelector('#home > div > header > div.navigation-wrapper > div > nav');
const newNavBar = oldNavBar.cloneNode(true);
document.querySelector('#search').insertAdjacentHTML('beforebegin', newNavBar.outerHTML);
oldNavBar.remove();



document.querySelector('#search > div.search_field > input').removeAttribute('placeholder');
document.querySelector('#home > div > header > div.header-wrapper > div.container > nav').insertAdjacentHTML('beforebegin', '<span>AL`DOMA</span>');
document.querySelector('#home > div > div > div.main-slider.content_center > div.custom_banner > div > div > div.banner__caption > h1').insertAdjacentHTML('beforeend', '<div>От производителя оптом и в розницу</div>');
document.querySelector('#home > div > div > div.main-slider.content_center > div.custom_banner > div > div > div.banner__caption').insertAdjacentHTML('beforeend', '<div class="mini-flex"><div class="flex-item-i lab"><div class="second-mini-flex"><div class="flex-image images"></div><div class="flex-image texto">Лабораторный контроль продуции</div></div><div class="flex-item-i quality"><div class="second-mini-flex"><div class="flex-image images"></div><div class="flex-image texto">Высококачественное сырье</div></div></div></div>');

if (document.querySelector('.common-home')) {
  const infoCardTypeOne = new InfoCardTypeOne(
    document.querySelector('#home > div > div > section > div.container'),
    'beforeEnd',
    salesData,
  );

  infoCardTypeOne.render();
}

document.querySelector('.info-card__title').innerHTML = "Преимущества шампуней AL'DOMA";

const imgNearText = new ImgNearText(
  document.querySelector('body>.wrapper>.content-area>.page-section'),
  'beforeEnd',
  dataAbout,
);

imgNearText.render();
document.querySelector('#home > div > div > section > div.about > div > div > div > div > h2').insertAdjacentHTML('beforeend', '<div class="flex-logo-text"><div class="thisLogo"></div><div class="thisLogoText">Al`DOMA</div></div>');


//document.querySelector('.about').insertAdjacentHTML('afterend', '<div class="leader"><div class="container"><div class="leader-title">Станьте дилером и получите<p>дополнительные преимущества</p></div><div class="three-flex-block"><div class="first-block"><div class="left-side block1"></div><div class="right-side block1">Выгодные цены</div></div><div class="second-block"><div class="left-side block2"></div><div class="right-side block2">Бесплатную доставку</div></div><div class="third-block"><div class="left-side block3"></div><div class="right-side block3">Бонусы по итогам года</div></div></div><button type="button" class="be-leader">Стать лидером</button></div></div>');

const imgNearText2 = new ImgNearText(
  // document.querySelector('#home > div > div > section > div.leader'),
  document.querySelector('.about'),
  'afterEnd',
  payDeliver,
);

imgNearText2.render();

//document.querySelector('#home > div > div > section > div:nth-child(4) > div > div > div > div > p:nth-child(3)').insertAdjacentHTML('afterend', '<ul><li>Наличными при получении</li><li>Банковской картой</li><li>По выставлению счета</li></ul>');
document.querySelector('#home > div > div > section > div:nth-child(3) > div > div > div > div > p:nth-child(3)').insertAdjacentHTML('afterend', '<ul><li>Наличными при получении</li><li>Банковской картой</li><li>По выставлению счета</li></ul>');

  


document.querySelector('body>.wrapper>.content-area>.page-section').insertAdjacentHTML('beforeend', '<div class="map-flex"><div class="container"><div class="our-contacts"><div>Контакты</div><div class="adress"><div>Адрес: </div><div>г.Волгоград, ул.Бурейская, д.8</div></div><div class="phone"><div>Телефон: </div><div>Техническая служба</div><div>Отдел продаж</div></div><div class="emails"><div>E-mail: </div><div>Ссылка</div></div></div><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7efb2b1c48455fd2e1c95a8256260ab3e86490a95490800b620cd291dff510af&amp;source=constructor" width="600" height="400" frameborder="0"></iframe></div></div>');

// const lastSection = document.querySelector("#home > div > div > section > div.map-flex");
// const sender = new FormBasic(lastSection, 'beforebegin', senderData)
// sender.render();

}

if (location.pathname !== '/') {
  const oldMenu = document.querySelector('#home > div > header > div.navigation-wrapper > div > nav');
  const newMenu = oldMenu.cloneNode(true);
  document.querySelector('#search').insertAdjacentHTML('beforebegin', newMenu.outerHTML);
  oldMenu.remove();

  if (location.pathname !== '/login/') {
  document.querySelector('section.page-section.titles').style.cssText = 'margin-top: 100px;';

  document.querySelector('body .content-area .page-section.titles').style.cssText = 'background: #ff000000; border: 0px;';
  document.querySelector('#home > div > div > section.page-section.titles > div > div > h1').style.cssText = 'font-size: 25px; font-weight: 900;';
  document.querySelector('#search > div.search_field > input ').style.cssText = 'border: none; background: #ff000000;';
  document.querySelector('#search > button > i').style.cssText = 'color: black;';
  document.querySelector('#search > button').style.cssText = 'position: absolute; z-index: 999;';
  document.querySelector('#cart > i').style.cssText = 'color: black;';
  document.querySelector('#home > div > header > div.header-wrapper > div.container > div.header-cart.sticky').style.cssText = 'display: flex; justify-content: center; align-self: center;';
  }

  if (screen.width <= 480) {
    document.querySelector('#home > div > div').style.cssText = 'margin-top: 60px;';
    document.querySelector('#home > div > header > div.header-wrapper > div.container > div.header-cart.sticky > div > div.dropdown.cart_drop_down').style.cssText = 'display: none;';
    if (location.pathname !== '/cart/') {
    document.querySelector('#sidebar').style.cssText = 'margin-bottom: 20px;';
    }
  }
}

document.querySelector('#home > div > header > div.header-wrapper > div.mobile-navigation-wrapper.d-lg-none.d-xl-none.sticky').insertAdjacentHTML('afterbegin', '<div>AL`DOMA</div>');

document.querySelector('.footer').remove();

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Гралько Людмила Викторовна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Гралько Людмила Викторовна', media);
  req.setTemplate();
}

if (location.pathname === '/login/') {
  document.querySelector('.header-cart.sticky').style.cssText = 'top: 12px !important;';
}

if (location.pathname === '/') {
  document.querySelector('.map-flex').insertAdjacentHTML('beforebegin', '<div class="send-form"><div class="container"><h3>Остались вопросы?</h3><h6>Оставьте заявку на консультацию и наши менеджеры свяжутся с Вами.</h6><div class="out-flex"><div class="in-flex"><input id="name" type="text" placeholder="Ваше имя" style="text-align:center"><input id="msg" type="text" placeholder="Телефон" style="text-align:center"></div><button class="sendWA">Отправить</button></div></div></div>');


window.onload = () => {
  document.querySelector(".sendWA").addEventListener('click', () => {
      send_handle()
  })
  
  function send_handle(){
  
    /*let num=document.getElementById("number").value;*/
  
    let msg= document.getElementById("msg").value;
  
    let name= document.getElementById("name").value;
    
    var win = window.open(`https://wa.me/79178434344?text=Здравствуйте,%20мне%20нужна%20консультация%20${name}%20${msg}`, '_blank');
   // win.focus();
  }
  }
}
  