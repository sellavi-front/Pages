// import '../../module/BigBanner/BigBanner.css';

import BigBanner from '../../modules/BigBanner/BigBanner.js';
import FetchApi from '../../modules/FetchApi/FetchApi.js';
import CustomCategories from '../../modules/CustomCategories/CustomCategories.js';
// import ChangeAgreement from '../../module/ChangeAgreement/ChangeAgreement.js';

const obj = {
  title: 'NEW IN',
  link: '#',
  linkContent: 'LinkContent',
};

const headers = {
  method: 'GET',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'x-token': '0fbdfb-5ceef5-84eac4-f6487c-ac7226',
  },
};

const urlFetch = 'https://cors-anywhere.herokuapp.com/https://ru.sellavi.com/gateway/categories';

const fetchApi = new FetchApi(urlFetch, headers);
const customCategories = new CustomCategories(fetchApi.getData());
const bigBanner = new BigBanner(document, obj);

//bigBanner.render();
customCategories.getDataFromApi();
//console.log(fetchApi.getData().res.data);

// // const customBanner = new CustomBanner();
// const changeArgree = new ChangeAgreement();

// new CustomBanner(document, obj);

// if (location.href.includes('checkout')) {
// changeArgree(document);
// }
// console.log('in shop', customBanner, changeArgree);

// import "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
// import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";

// $(document).ready(function () {
//   (function () {
//     emailjs.init("user_AcYeG4byo4meSAUiTCfAy");
//   })();

//   if (location.href != "https://sslab.moscow/checkout/") {
//     document
//       .querySelector(
//         "#home > div.wrapper.wrapper-closed > div > section > div.container"
//       )
//       .classList.add("container-fluid");

//     document.querySelector("#cart").style.color = "black";
//     document.querySelector(
//       "#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky > a"
//     ).style.color = "black";

//     document.querySelector("footer").insertAdjacentHTML(
//       "afterbegin",
//       `
// <div class="footer__logo">
//      <div class="logo">
//             <img src="https://res.cloudinary.com/gz-company/image/upload/v1603280567/sslab_logo_white_bxmzya.png" alt="logo">
//       </div>
// </div>
// <div class="footer__inst">
// <a href="https://www.instagram.com/sslab_moscow/" target="_blank" class="InstagramProfilesPlate-link">
// <span class="InstagramProfilesPlate-key">Instagram бренда</span><span class="InstagramProfilesPlate-value">@sslab_moscow</span></a>
// </div>
// `
//     );
//   }

//   if (
//     location.href === "https://sslab.moscow/?from_admin" ||
//     location.href == "https://sslab.moscow/" ||
//     location.href == "https://sslab.moscow/#"
//   ) {
//     document.querySelector("#cart").style.color = "white";
//     document.querySelector(
//       "#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky > a"
//     ).style.color = "white";

//     const categoriesContainer = document.querySelector(
//       ".latest-section > .container"
//     );

//     if (categoriesContainer !== null) {
//       const listDiv = document.createElement("div");
//       listDiv.setAttribute("id", "app");
//       categoriesContainer.prepend(listDiv);

//       new Vue({
//         el: "#app",
//         data: {
//           categories: [
//             {
//               title: "НОВИНКИ",
//               link: "https://sslab.moscow//новинки/",
//               img:
//                 "https://res.cloudinary.com/gz-company/image/upload/v1603099813/SSLAB/%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%B0_zfdh2u.jpg",
//               text:
//                 'Самые последние тренды, цветовые решения, а также актуальные формы — все это вы найдете в разделе "новинки"',
//             },
//             {
//               title: "СПОРТИВНЫЕ КОСТЮМЫ",
//               link: "https://sslab.moscow/спортивные-костюмы/",
//               img:
//                 "https://res.cloudinary.com/gz-company/image/upload/v1603099813/SSLAB/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B8%CC%86_%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC_deywt2.jpg",
//               text:
//                 "Модный спортивный костюм – универсальная женская одежда 2020-2021 года на разные случаи жизни. Он давно уже перестал быть всего лишь формой для посещения фитнес-клубов. В 2020-2021 году популярность этой одежды достигает максимальной популярности благодаря различным сферам применения.",
//             },
//             {
//               title: "КОЛЛЕКЦИИ",
//               link:
//                 "https://sslab.moscow/%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B8/",
//               img:
//                 "https://res.cloudinary.com/gz-company/image/upload/v1603099813/SSLAB/%D0%BB%D0%B8%D0%BB%D0%BE%D0%B2%D1%8B%D0%B8%CC%86_%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC_vg01kx.jpg",
//               text:
//                 "Мы воплотили наше представление о комфорте и создали вещи, призванные превратить каждый день в праздник. Нам не важно, дома ли вы или на корпоративной zoom-вечеринке. Чувствуйте себя удобно и великолепно одновременно.",
//             },
//           ],
//         },
//         template: `
//           <div class="custom-cat row">
//           <div class="custom-cat__item" v-for="category of categories">
//               <div class="custom-cat__title-container">
//                   <h4 class="custom-cat__title">{{ category.title }}</h4>
//                   <p class="custom-cat__ph">
//                      {{ category.text }}
//                    </p>
//                    <a :href="category.link" class="custom-cat__link">Смотреть все</a>
//                </div>
//               <img :src="category.img">
//           </div>
// </div>
//       `,
//       });
//     }
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   if (location.href != "https://sslab.moscow/checkout/") {
//     document.querySelector("#bs-menu-footer").remove();
//     if (document.querySelector("body").classList.contains("error-not_found")) {
//       document.querySelector(
//         ".error-not_found > div.wrapper.wrapper-closed > div > section > div:nth-child(2) > h3"
//       ).textContent = "404";
//     }

//     const footerWidgets = document.querySelector("footer > div.footer-widgets");

//     footerWidgets.insertAdjacentHTML(
//       "afterBegin",
//       `
// <div class="sender">
//   <h4 class="sender__title">У нас есть e-mail рассылка</h4>
//   <p class="sender__description">
//     Получайте письма с последними новинками, акциями и розыгрышами. Вы можете отписаться в любой момент
//   </p>
//   <form action="submit" class="sender__form">
//     <input
//       type="email"
//       class="sender__form_input"
//       placeholder="Ваш e-mail"
//     />
//     <button class="sender__form_btn">
//       <i class="far fa-angle-right"></i>
//     </button>
//   </form>
// </div>
// `
//     );

//     const oldTerms = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(1)"
//     );
//     const oldPolicy = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(2)"
//     );
//     const oldPol = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(4)"
//     );
//     const oldTerm = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(6)"
//     );

//     const terms = document
//       .querySelector(
//         "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(1)"
//       )
//       .cloneNode(true);

//     const policy = document
//       .querySelector(
//         "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(2)"
//       )
//       .cloneNode(true);

//     const pol = document
//       .querySelector(
//         "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(4)"
//       )
//       .cloneNode(true);

//     const term = document
//       .querySelector(
//         "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(6)"
//       )
//       .cloneNode(true);

//     const delivery = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(3)"
//     );

//     const helpCol = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(3) > div > ul"
//     );

//     document
//       .querySelector(
//         "footer > div.footer-widgets > div.container > div > div:nth-child(3) > div > ul > li:nth-child(1)"
//       )
//       .remove();

//     const contactLi = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(4)"
//     );

//     helpCol.insertAdjacentElement("afterbegin", delivery);
//     helpCol.insertAdjacentElement("afterbegin", contactLi);

//     const contact = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(3) > a"
//     );

//     contact.textContent = "Контакты";

//     const cabinet = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(3) > div > h4"
//     );

//     cabinet.textContent = "Помощь";

//     const aboutWidget = document.querySelectorAll(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li"
//     );
//     const meta = document.querySelector(".footer-meta");
//     const aboutCompany = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1)"
//     );
//     const companyUl = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul"
//     );

//     companyUl.insertAdjacentElement("afterbegin", aboutCompany);
//     aboutWidget.forEach((el, idx) => (idx > 2 ? el.remove() : el));

//     meta.insertAdjacentHTML(
//       "beforebegin",
//       `
// <div class="footer-bottom">
//   <ul class="footer-bottom__docs"></ul>
// </div>
// `
//     );

//     const footerBottom = document.querySelector(".footer-bottom__docs");

//     footerBottom.insertAdjacentHTML("beforeend", terms.outerHTML);
//     footerBottom.insertAdjacentHTML("beforeend", policy.outerHTML);
//     footerBottom.insertAdjacentHTML("beforeend", pol.outerHTML);
//     footerBottom.insertAdjacentHTML("beforeend", term.outerHTML);

//     oldTerms.remove();
//     oldPolicy.remove();
//     oldPol.remove();
//     oldTerm.remove();

//     const supportTitle = document.querySelector(
//       "footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > h4"
//     );
//     const aboutUss = document.querySelector(
//       " footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > h4"
//     );

//     document.querySelector(
//       " footer > div.footer-widgets > div.container > div > div:nth-child(2) > div > ul > li:nth-child(1) > a"
//     ).textContent = "О бренде";

//     supportTitle.textContent = "Компания";
//     aboutUss.textContent = "Магазин";
//     document
//       .querySelector(
//         "#home > div.wrapper.wrapper-closed > div > section > div.container"
//       )
//       .classList.remove("container");
//     document
//       .querySelector(
//         "#home > div.wrapper.wrapper-closed > div > section > div.container"
//       )
//       .classList.add("container-fluid");
//     document
//       .querySelector("#content > .container")
//       .classList.remove("container");

//     const products = document.querySelector("#content > div > div.products");
//     const productItem = products.querySelectorAll(".product-item");

//     products.classList.remove("row", "grid");

//     const filterGroupRight = document.querySelector(
//       "#content > div > div.shop-sorting.d-none.d-lg-block.mt-3.mt-lg-0.col-md-12 > div > div.d-none.d-lg-block.col-lg-4.text-right.p-0"
//     );

//     filterGroupRight.remove();

//     productItem.forEach((el) => {
//       el.classList.remove(
//         "col-12",
//         "col-sm-6",
//         "col-md-6",
//         "col-lg-6",
//         "col-xl-4",
//         "mb-4"
//       );
//     });

//     if (location.href.includes("checkout")) {
//       const root = document.querySelector(".contact-info");
//       const list = document.createElement("div");
//       list.id = "requisites";
//       root.append(list);
//       let Requisites = new Vue({
//         el: "#requisites",
//         data: {
//           requisites: [
//             "Наименование: Сафарова Сабина Асадовна",
//             "ИНН: 770501364203",
//             "ОГРНИП: 318774600624892",
//             "Юридический адрес: 123100, Москва, улица 1905 года, д.5, кв.84",
//             "Телефон: 89645600515",
//           ],
//         },
//         template: `
//                 <ul class="requisite">
//                     <li class="requisite__title">
//                         Реквизиты
//                     </li>
//                     <li v-for="requisite in requisites">{{ requisite }}</li>
//                 </ul>
//             `,
//       });
//     }
//   }
// });

// $(function () {
//   const widget = $(".footer-widgets>.container>.row>.col-md-3:first>.widget");
//   const widTitle = widget.find(".widget-title");
//   const widCat = widget.find(".widget-categories>ul>li:first-child>a");
//   let textTrans = "About us ";
//   let textRus = "О нас";

//   if (widTitle.html() == textTrans || widCat.html() == textTrans) {
//     widTitle.text(textRus);
//     widCat.text(textRus);
//   }
// });

// $(function () {
//   if (location.href.includes("checkout")) {
//     $(".form_checkout").ready(function () {
//       $(".checkbox>label").html(
//         'Согласен (-а) с условиями <a href="/terms-of-use/" " style="text-decoration: none !important; "><b style="font-weight: bold !important;">Публичной оферты</b></a>'
//       );
//     });
//   }
// });

// $(function () {
//   $(".custom_banner").html(`
//     <div class="outer-container">
//   <div class="banner" data--200-top="opacity: 1;" data-top-bottom="opacity: 0;">
//     <div class="banner__image" data-0="transform: translateY(0px);" data-top-bottom="transform: translateY(300px);"></div>
//     <div class="banner__caption">
//       <h1>NEW IN</h1>
//       <a href="#">
//         СМОТРЕТЬ ВСЕ
//       </a>
//     </div>
//   </div>
// </div>
//     `);
// });

// $(function () {
//   const categoriesArr = Array.from(
//     document.querySelectorAll(".nav .sf-menu > li")
//   );
//   const categoriesTrimmed = categoriesArr.slice(1, categoriesArr.length);

//   const categories = categoriesTrimmed.map((li) => {
//     const link = li.firstElementChild;
//     const result = {};
//     result.title = link.textContent;
//     result.link = link.href;
//     return result;
//   });

//   const categoriesContainer = document.querySelector(
//     "body .content-area .page-section"
//   );

//   if (categoriesContainer !== null) {
//     const listDiv = document.createElement("div");
//     listDiv.setAttribute("id", "app");
//     categoriesContainer.prepend(listDiv);

//     new Vue({
//       el: "#app",
//       data: {
//         categories: categories,
//       },
//       template: `
//                  <div class="custom-categories">
//                    <div class="custom-categories__item" v-for="category of categories">
//                      <a :href="category.link">
//                        <span class="custom-categories__title-container"><h4 class="custom-categories__title">{{ category.title }}</h4></span>
//                      </a>
//                    </div>
//                  </div>
//                `,
//     });
//   }
// });
