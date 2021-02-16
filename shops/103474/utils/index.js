import "../../../components/HeaderTypeTwo/HeaderTypeTwo.js"
import "../../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../../fixes/fixes.js"
import '../../../fixes/js/ChangeAgreement/ChangeAgreement.js'
// import Banner from "../blocks/banner.js"
import pages from "./pages/pages.js"
import Advantages from "../blocks/advantages.js"
import Functions from "./functions/functions.js"
import renderCategories from "../categories/render-categories.js";
import SocIconsTypeOne from "../../../components/SocialIconsTypeOne/SocialIconsTypeOne.js"
import socIcons from "./socIcons.js"
import icons from '../utils/icons/icons.js'

import ChangeIconInProductCard from './functions/functions.js'


if(pages.home) {

  const btnInSlider = document.querySelector('body.common-home .main-slider .caption .caption-text a ');
  btnInSlider.textContent = '';
  btnInSlider.insertAdjacentHTML('afterbegin', `${icons.other.bag} Начать покупать`)

  btnInSlider.insertAdjacentHTML('beforebegin', `<span>Мясо, выпечка, консервы, сладости и многое другое прямиком из Израиля.</span>`)

  if(window.screen.width >= 575) {
    document.querySelector("#home > div > div.content-area > section > div > h2 > span").insertAdjacentHTML("afterend", `<i class="fa fa-fire hits"></i>`)
    let advantages = new Advantages()
    advantages.render()
    if (document.querySelector('.product-item')) {
      const productItems = document.querySelectorAll('.product-item');

    }
  } else {
    document.querySelector("#home > div > div.content-area > section > div > h2 > span").insertAdjacentHTML("afterend", `<i class="fa fa-fire hits"></i>`)
  }
  renderCategories()
  const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
  const sourceCat = document.querySelectorAll(".common-home>.wrapper>.content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source")

  sourceCat.forEach( source => {
    const srcset = source.getAttribute('srcset');
    let replacedSrc1 = srcset.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
    source.setAttribute('srcset', replacedSrc1);
  })

  imgCat.forEach(cat => {
    const src = cat.getAttribute('src');
    let replacedSrc2 = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
    cat.setAttribute('src', replacedSrc2);
  })

}

if (pages.all) {
  const headerIcons = {
    cart: document.querySelector('body .header_widgets .header-cart i'),
    like: document.querySelector('body .header_widgets .header_wishlist i')
  }

  headerIcons.cart.classList.remove('fa-shopping-cart', 'far');
  headerIcons.cart.insertAdjacentHTML('afterbegin', icons.cart)
  headerIcons.like.classList.remove('far', 'fa-heart')
  headerIcons.like.insertAdjacentHTML('afterbegin', icons.like)
  /* Catalog */
  let oldCatalog = document.querySelector(".mobile-navigation-wrapper")
  oldCatalog.classList.add("header-catalog")
  let newCatalog = oldCatalog.cloneNode(true)
  document.querySelector(".logo").insertAdjacentHTML("afterend", newCatalog.outerHTML)
  oldCatalog.remove()
}

if (location.href.includes('/checkout')) {
  let newElement = document.createElement('form')
  newElement.classList.add("form_checkout")
  let oldElement = document.querySelector("#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout")
  newElement.innerHTML = oldElement.innerHTML
  oldElement.parentNode.replaceChild(newElement, oldElement)
}

const logoSellavi = document.querySelector("#sellavi_logo > img");

if (logoSellavi) {
  logoSellavi.setAttribute('src', 'https://res.cloudinary.com/depgheppz/image/upload/v1612986109/Frame_4_l3scow.png');
}

if (document.querySelector('footer > .footer-widgets')) {
  document.querySelector('footer>.footer-widgets > div > div').insertAdjacentHTML('beforeend', `
    <div class="col-md-3">
      <div class="widget widget-categories widget-categories-soc-icons">
        <h4 class="widget-title">Мы в соц сетях</h4>
      </div>
    </div>
  `)
  new SocIconsTypeOne(document.querySelector('.widget-categories-soc-icons'), 'beforeend', socIcons).render();

  let headerCatalogLink = document.querySelector(".mobile-navigation-wrapper a.menu-toggle")
  headerCatalogLink.insertAdjacentHTML("beforeend", `<span class="catalog-title">Каталог</span>`)
  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

  listt.forEach((el) => {
    const tr = el.textContent;

    if(tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });
}



