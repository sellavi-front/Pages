import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import RatingWithImgText from "../../components/RatingWithImgText/RatingWithImgText.js";
=======
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
=======
// import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
<<<<<<< HEAD
>>>>>>> a40d97689d2246beee13469403d31bfdbe1706c9
=======
>>>>>>> 10f10b8e5452e71d1b9c54dabeb85bb6c495d459
>>>>>>> 70e19ce0bac23bb43e78a1990b614bf3ae6c4507
=======
import RatingWithImgText from '../../components/RatingWithImgText/RatingWithImgText.js';
>>>>>>> 88605669a8d1e2d1b5a95e72cd12272f4bab00e2
import BaseSender from '../../components/BaseSender/BaseSender.js';
import Steps from '../../components/Steps/Steps.js';
import deliveryPage from './deliveryPage.js';
import cartWhite from './assets/svg/bag-white.js';
import setDarkTheme from '../../components/DarkMode/DarkMode.js';
import aboutData from './utils/aboutData.js';
import { l1, l2 } from './assets/svg/l1.js';
import themeToggle from './themeToggle.js';

const icons = {
    cart: '<img src="https://res.cloudinary.com/depgheppz/image/upload/v1611136009/Vector_opwga3.svg" alt="cart">',
    like: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
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

    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.navigation-wrapper > div > nav > ul > li:nth-child(3) > a").removeAttribute('href');
    document.querySelector("#home > div.wrapper.wrapper-closed > header > div.navigation-wrapper > div > nav > ul > li:nth-child(2) > a").removeAttribute('href');
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


    document.querySelectorAll('.sf-menu li.megamenu > ul li.megaline > div').forEach(el => {
      el.classList.add('col-2')
    })

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

    document.querySelectorAll("body > div.content-area > section > div.flexwrap.checkout_form > div h2").forEach(h2 => {
      h2.textContent = h2.textContent.replace(/Шаг \w:/gi, '')
    })

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
