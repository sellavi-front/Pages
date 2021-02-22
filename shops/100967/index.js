import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
import RatingWithImgText from '../../components/RatingWithImgText/RatingWithImgText.js';
import BaseSender from '../../components/BaseSender/BaseSender.js';
import Steps from '../../components/Steps/Steps.js';
import deliveryPage from './deliveryPage.js';
import cartWhite from './assets/svg/bag-white.js';
import setDarkTheme from '../../components/DarkMode/DarkMode.js';
import aboutData from './utils/aboutData.js';
import { l1, l2 } from './assets/svg/l1.js';
import themeToggle from './themeToggle.js';
import './utils/accuring/accuring.js'

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
  // const delSelectorsProductItem = new DeleteClasses(productItem);

  const logo = document.querySelector('#cart');
  const logoIco = document.querySelector('#cart > i');
  logoIco.remove();
  logo.insertAdjacentHTML('afterbegin', icons.cart);

  document
    .querySelector(
      '#home > div.wrapper.wrapper-closed > header > div.navigation-wrapper > div > nav > ul > li:nth-child(3) > a',
    )
    .removeAttribute('href');
  document
    .querySelector(
      '#home > div.wrapper.wrapper-closed > header > div.navigation-wrapper > div > nav > ul > li:nth-child(2) > a',
    )
    .removeAttribute('href');
  // Icons in header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  hideCart.remove();
  // End

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
    'Остались вопросы? Оставьте ваш телефон, наш специалист с вами свяжется.',
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
  buttonsInHeader.setTemplate();

  // hideCart.remove();
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

  const brg = document.querySelector('.mobile-navigation-wrapper');
  document
    .querySelector('.header-wrapper > .container')
    .insertAdjacentHTML('afterbegin', brg.outerHTML);
  brg.remove();

  document.querySelectorAll('.sf-menu li.megamenu > ul li.megaline > div').forEach((el) => {
    el.classList.add('col-2');
  });

  const footerDocs = document.querySelector(
    'footer > div.footer-widgets > div > div.row > div:nth-child(2) > div > ul',
  );
  const phh = document.querySelector('.phh');
  phh.insertAdjacentHTML('beforebegin', `<div class="docs">${footerDocs.outerHTML}</div>`);

  document.querySelectorAll('.panel-collapse > ul > li > a').forEach((el) => {
    const tr = el.textContent;

    if (tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });
}

if (document.querySelector('.account-register')) {
  document.querySelectorAll('form > fieldset > div > div').forEach((sel) => {
    sel.classList.remove('col-sm-10');
  });
}
if (document.querySelector('.common-home')) {
  const gridPhotoWithText = new GridPhotoWithText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
  );

  gridPhotoWithText.render();
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

  const onDelete = [
    model,
    description,
    addReview,
    rating,
    reviews,
    productRating,
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
    .querySelector('body > div > div > section .product-single > div:nth-child(2)')
    .childNodes[3].remove();

  document
    .querySelector(
      '#home > div > div > section > div > div.row.product-single.product-item > div:nth-child(2) > div.price-cont > div.rating-cont > a',
    )
    .text.substr(0, 2);

  if (document.querySelector('.comments')) {
    const date = document.querySelector('#review > div.comments > div > div > span');
    const commentMeta = document.querySelector(
      '#review > div.comments > div > div > p.comment-meta',
    );
    commentMeta.insertAdjacentHTML('beforeend', date.outerHTML);

    document.querySelector('#form-review > div.comments-form > h2').textContent = 'Оставить отзыв';
  }
}

if (location.href.includes('/checkout')) {
  document
    .querySelectorAll('body > div.content-area > section > div.flexwrap.checkout_form > div h2')
    .forEach((h2) => {
      h2.textContent = h2.textContent.replace(/Шаг \w:/gi, '');
    });

  document
    .querySelector(
      '#home > div.content-area > section > div.flexwrap.checkout_form > div.cart_block',
    )
    .insertAdjacentHTML(
      'beforeend',
      `
<div class="warranty">
  <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611321319/Group_264_1_qlpx7e.png">
</div>
`,
    );
}

if (document.querySelector('.product-item')) {
  document.querySelectorAll('.product-item .add_to_cart button').forEach((btn) => {
    btn.querySelector('i').remove();
    btn.textContent = 'В корзину';
    btn.insertAdjacentHTML('afterbegin', icons.cart);
  });
}

if (document.querySelector('.product-product')) {
  const btnCart = document.querySelector('#button-cart');
  btnCart.querySelector('i').remove();
  btnCart.textContent = 'В корзину';
  btnCart.insertAdjacentHTML('afterbegin', cartWhite);

  const colProdcut = document.querySelector(
    '#home > div > div.content-area > section > div > div.row.product-single.product-item > div:nth-child(2)',
  );
  colProdcut.insertAdjacentHTML(
    'beforeend',
    `
    <div class="warranty">
      <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611321319/Group_264_1_qlpx7e.png">
    </div>
  `,
  );

  const titleSect = document.querySelector('#home > div > section > div > h2 > span');
  if (titleSect) {
    titleSect.insertAdjacentHTML('afterend', l1);
    titleSect.insertAdjacentHTML('beforebegin', l2);
  }
}

if (location.href.includes('/pay-delivery')) {
  const mainContainer = document.querySelector('#content > div > div');

  const props = {
    container: mainContainer,
    target: 'beforeend',
  };

  const dataSteps = {
    title: 'Клуб Miru позволит вам:',
    content: [
      'Скорректировать контактные данные и адрес доставки;',
      'Посмотреть историю покупок;',
      'Проконсультироваться с врачом-офтальмологом;',
      'Получить напоминание пополнить Ваш запас линз, с нами вы всегда будете видеть!',
      'Записаться на бесплатный прием к офтальмологу.',
      'Получать подарки, бонусы, скидки и многое другое!',
    ],
  };

  new Steps(props, dataSteps).setTemplate();

  mainContainer.insertAdjacentHTML('beforeend', deliveryPage());

  document.querySelector('.page-section.titles').insertAdjacentHTML(
    'beforebegin',
    `
  <section class="page-section reg">
    <div class="reg-text">
        <h1>Регистрация на сайте</h1>
        <p>
          Мы ценим Ваше время, поэтому предлагаем максимально просто вступить в Клуб Miru - зарегистрироваться на сайте mirulens.ru для удобного и быстрого заказа Ваших линз!
        </p>
    </div>
  </section>`,
  );
}

window.onload = () => {
  setTimeout(function () {
    const buttons = document.querySelectorAll(
      '#product > div.form-group.col-sm-6.required.option-group > div > button',
    );
    if (buttons.length) {
      for (let index = 1; index <= buttons.length; index += 1) {
        buttons[index - 1].addEventListener('click', () => {
          const options = document.querySelectorAll('.dropdown-item');
          const mainLinkParts = location.href.split('/');
          const linkParts = mainLinkParts[mainLinkParts.length - 2].split('-');
          for (let option of options) {
            const title = option.firstElementChild.textContent;
            const type = title.replace('.', '').replace('-', 'minus').trim();
            linkParts[index] = type;
            if (option.firstElementChild.textContent === ' --- Выберите --- ') {
              option.href = `/${linkParts.slice(0, index).join('-')}/`;
            } else {
              option.href = `/${linkParts.join('-')}/`;
            }
            option.addEventListener('click', (e) => {
              e.stopPropagation();
            });
          }
        });
      }
    }
  }, 1500);

  setTimeout(function () {
    const buttons = document.querySelectorAll(
      '#product > div.form-group.col-sm-6.required.option-group > div > button',
    );
    if (buttons.length) {
      const mainLinkParts = location.href.split('/');
      const linkParts = mainLinkParts[mainLinkParts.length - 2].split('-');
      for (let index = 1; index <= buttons.length && index <= linkParts.length; index += 1) {
        const modification = linkParts[index].replace('minus', '-');

        buttons[index - 1].click();

        const options = document.querySelectorAll('.dropdown-item');
        for (let option of options) {
          const optionName = option.firstElementChild.textContent
            .toLowerCase()
            .trim()
            .replace('.', '');
          if (optionName === modification) {
            option.click();
          }
        }

        document
          .querySelector(
            'body> div.wrapper.wrapper-closed > div.content-area > section:nth-child(1) > div > div > div:nth-child(2)',
          )
          .click();
      }
    }
  }, 1000);

  setTimeout(function () {
    const selector = document.querySelector('.selectpicker-wrapper');
    if (!selector) {
      const button = document.querySelector(
        'body> div.wrapper.wrapper-closed > div.content-area > section:nth-child(1) > div > div > div:nth-child(2) > div.buttons.d-flex.flex-wrap',
      );
      /*if (button) {
              button.remove();
          } */
    }
  }, 900);

  if (
    location.href.includes('?utm_source=google') ||
    location.href.includes('/?utm_source=vk') ||
    location.href.includes('/?utm_source=direct.yandex.ru') ||
    location.href.includes('/?utm_source=facebook')
  ) {
    const mediaBody = document.querySelector(
      'div.wrapper.wrapper-closed > div > div > section > div > div > div.col-md-4 > div > div > div:nth-child(2) > div',
    );

    mediaBody.classList.remove('media-body');
    mediaBody.classList.add('ya-phone');
  }

  if (location.href.includes('/contact')) {
    const mediaBody = document.querySelector(
      'div.wrapper.wrapper-closed > div > div > section > div > div > div.col-md-4 > div > div > div:nth-child(2) > div',
    );
    let widdCat = document.querySelector(
      '#home > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1)',
    );

    const newCat = widdCat.querySelector('.ya-phone');

    mediaBody.insertAdjacentHTML(
      'beforeend',
      `<a class="ya-phone" href="tel:74993980693"> +7 (499) 398-89-66</a>`,
    );
  }

  const headCont = document.querySelector(
    '#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container',
  );

};

$(document).ready(function () {
  if (location.href === `${location.origin}/checkout/`) {
    $('.checkout-checkout').ready(function () {
      let checkboxLable = $('.checkbox>label');
      checkboxLable.html(
        'Согласен(-а) с <a href="/terms-return/" " style="text-decoration: none !important; "><b>Условиями </b></a>',
      );
    });
  }

  $('.product-product').ready(function () {
    $('#button-cart').on('click', function () {
      const alerts = document.querySelectorAll('.text-danger');
      for (let alert of alerts) {
        const alertParent = alert.parentElement;
        const nameBlock = alertParent.firstElementChild;
        const name = nameBlock.textContent.toLowerCase();
        alert.innerHTML = `Поле ${name} обязательно!`;
      }
    });
  });

  $('.price_actions').removeClass('justify-content-between');
  $('.price_actions').addClass('flex-column justify-content-center');
  let widget = $('.footer-widgets>.container>.row>.col-md-3:first>.widget');
  let widTitle = widget.find('.widget-title');
  let widCat = $(
    'div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1)',
  );

  let textTrans = 'About us ';
  let textRus = 'Контакты';

  if (widTitle.html() == textTrans || widCat.html() == textTrans) {
    widTitle.text(textRus);
    widCat.prepend(`<a class="ya-phone"> </a>`);

    $(
      'footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a:nth-child(2)',
    ).remove();
  }
});

$(document).ready(function () {
  $(
    '#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.checkbox.customized.clearfix > label',
  ).html('a');
});

$(document).ready(function () {
  $(
    '#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.checkbox.customized.clearfix > label',
  ).html(
    `<label>Я ПРОЧИТАЛ <a href="${location.origin}/terms-return/" target="_blank">УСЛОВИЯ</a> И СОГЛАСЕН С УСЛОВИЯМИ</label>`,
  );
});

$(function () {
  setTimeout(() => {
    const soldOutList = document.querySelectorAll(
      '#product>.selectpicker-wrapper:nth-child(1) > div > div > .custom-control-label',
    );
    soldOutList.forEach((item) => {
      let el = item;
      if (el.innerHTML.length > 6) {
        let newEl = item.textContent.slice(0, 6);
        el.textContent = newEl;
        el.classList.add('sold__out');
      }
    });
  }, 1000);
  if (!location.href == `${location.origin}/checkout/`) {
    let burger = document.querySelector(
      '#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.d-lg-none.d-xl-none.sticky',
    );

    burger.addEventListener('click', () => {
      let aLinks = document.querySelectorAll(
        '#home > nav.navigation.mobile_side_nav.opened.nav-opened > ul > .flexy > a',
      );

      let ul = document.querySelector(
        '#home > nav.navigation.mobile_side_nav.opened.nav-opened > ul',
      );

      /* Delete href */
      aLinks.forEach((a) => {
        a.removeAttribute('href');
      });

      /* Added a click event with opening area with li elements */
      ul.addEventListener('click', (event) => {
        let x = event.target.closest('li');
        let y = x.querySelector('.panel-collapse');
        let z = x.querySelector('.arrow');
        console.log(y);
        z.classList.toggle('clicked');
        y.classList.toggle('show');
      });
    });
    /* Color cart number */
    let number = document.querySelector('.cart-qty-circle').textContent.trim();
    $('.cart-qty-circle').bind('DOMSubtreeModified', function () {
      console.log(typeof number);
      console.log(number);
      if (number !== '0') {
        console.log(number);
        document.querySelector('.cart-qty-circle').style.backgroundColor = 'red';
      } else document.querySelector('.cart-qty-circle').style.backgroundColor = 'white';
    });
  }
});
