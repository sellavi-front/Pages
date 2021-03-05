import '../../../components/HeaderTypeTwo/HeaderTypeTwoV2.js';
// import '../../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../../fixes/fixes.js';
import '../../../fixes/js/ChangeAgreement/ChangeAgreement.js';
// import Banner from "../blocks/banner.js"
import pages from './pages/pages.js';
import Advantages from '../blocks/advantages.js';
import Functions from './functions/functions.js';
import renderCategories from '../categories/render-categories.js';
import SocIconsTypeOne from '../../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import socIcons from './socIcons.js';
import icons from '../utils/icons/icons.js';
// import '../../../fixes/js/RemoveBlurAndAddBtn/RemoveBlurAndAddBtn.js';
import ChangeIconInProductCard from './functions/functions.js';
import SocIconsTypeOneV2 from '../../../components/SocialIconsTypeOne/SocialIconsTypeOneV2.js';
import translateBtnInSearch from './functions/translateBtnInSearch.js';
// import CustomSection from "../blocks/custom-section.js"

if (pages.home) {
  const btnInSlider = document.querySelectorAll(
    'body.common-home .main-slider .caption .caption-text a ',
  );

  btnInSlider.forEach((btn) => {
    btn.textContent = '';
    btn.insertAdjacentHTML('afterbegin', `Начать покупать`);
  });
  document
    .querySelector('body.common-home .main-slider .caption .caption-content')
    .insertAdjacentHTML(
      'afterbegin',
      `<img class="mb-5" src="https://res.cloudinary.com/depgheppz/image/upload/v1614861123/Group_7423585_ezrqbu.png">`,
    );

  if (window.screen.width >= 575) {
    document
      .querySelector('#home > div > div.content-area > section > div > h2 > span')
      .insertAdjacentHTML('afterend', `<i class="fa fa-fire hits"></i>`);
    let advantages = new Advantages();
    advantages.render();
  } else {
    document
      .querySelector('#home > div > div.content-area > section > div > h2 > span')
      .insertAdjacentHTML('afterend', `<i class="fa fa-fire hits"></i>`);
  }

  renderCategories();

  const imgCat = document.querySelectorAll(
    '.page-section.homefeatured_category > div > div > div > div > div > a > picture > img',
  );
  // const sourceCat = document.querySelectorAll(
  //   '.common-home>.wrapper>.content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source',
  // );

  // sourceCat.forEach((source) => {
  //   const srcset = source.getAttribute('srcset');
  //   let replacedSrc1 = srcset.replace(
  //     /\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi,
  //     '',
  //   );
  //   source.setAttribute('srcset', replacedSrc1);
  // });

  imgCat.forEach((cat) => {
    const src = cat.getAttribute('src');
    let replacedSrc2 = src.replace(
      /\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi,
      '',
    );
    cat.setAttribute('src', replacedSrc2);
  });
}

if (pages.all) {
  const headerIcons = {
    cart: document.querySelector('body .header_widgets .header-cart i'),
    like: document.querySelector('body .header_widgets .header_wishlist i'),
  };

  headerIcons.cart.classList.remove('fa-shopping-cart', 'far');
  headerIcons.cart.insertAdjacentHTML('afterbegin', icons.cart);
  headerIcons.like.classList.remove('far', 'fa-heart');
  headerIcons.like.insertAdjacentHTML('afterbegin', icons.like);
  /* Catalog */
  let oldCatalog = document.querySelector('.mobile-navigation-wrapper');
  oldCatalog.classList.add('header-catalog');

  let newCatalog = oldCatalog.cloneNode(true);
  document.querySelector('.logo').insertAdjacentHTML('afterend', newCatalog.outerHTML);
  oldCatalog.remove();

  translateBtnInSearch();
}

if (location.href.includes('/index.php?route=account/register')) {
  document
    .querySelector(
      '#content > form > fieldset:nth-child(5) > div > div.col-sm-12 > div > div > input',
    )
    .classList.remove('btn-primary');
  document
    .querySelector(
      '#content > form > fieldset:nth-child(5) > div > div.col-sm-12 > div > div > input',
    )
    .classList.add('btn-success');
}

if (document.querySelector('footer > .footer-widgets')) {
  document.querySelector('footer>.footer-widgets > div > div').insertAdjacentHTML(
    'beforeend',
    `
    <div class="col-md-3">
      <div class="widget widget-categories widget-categories-soc-icons">
        <h4 class="widget-title">Мы в соц сетях</h4>
      </div>
    </div>
  `,
  );
  new SocIconsTypeOne(
    document.querySelector('.widget-categories-soc-icons'),
    'beforeend',
    socIcons,
  ).render();

  let headerCatalogLink = document.querySelector('.mobile-navigation-wrapper a.menu-toggle');
  headerCatalogLink.insertAdjacentHTML('beforeend', `<span class="catalog-title">Каталог</span>`);
  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

  listt.forEach((el) => {
    const tr = el.textContent;

    if (tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });
}

// jQuery(function () {
//   if (document.querySelector('.checkout-checkout')) {
//     $('#input-payment-cityId').attr('value', '49694102');
//     $('#input-payment-cityId + input').attr('value', '---');
//     $('#select2-input-payment-city-container').attr('title', 'Москва');
//   }
// });
