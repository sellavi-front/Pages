import "../../../components/HeaderTypeTwo/HeaderTypeTwo.js"
import "../../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../../fixes/fixes.js"
import Banner from "../blocks/banner.js"
import pages from "./pages/pages.js"
import Advantages from "../blocks/advantages.js"
import Functions from "./functions/functions.js"
import DeleteClasses from '../../../modules/DeleteClasses/DeleteClasses.js'
import CustomSection from "../blocks/custom-section.js"

const bootstrapClasses = [
  'col-lg-4',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-lg-6',
  'col-xl-4',
/*  'mb-4',*/
  'container'
];

if(pages.home) {
  /*let banner = new Banner()
  banner.updateImgCategories()
  let customBanner = new CustomBanner()
  customBanner.render()*/
  if(window.screen.width >= 575) {
    document.querySelector("#home > div > div.content-area > section > div > h2 > span").insertAdjacentHTML("afterend", `<i class="fa fa-fire hits"></i>`)
    let advantages = new Advantages()
    advantages.render()
    if (document.querySelector('.product-item')) {
      const productItems = document.querySelectorAll('.product-item');
      const deleteSelectors = new DeleteClasses(productItems);
      deleteSelectors.findAndDelete();
    }
  } else {
    document.querySelector("#home > div > div.content-area > section > div > h2 > span").insertAdjacentHTML("afterend", `<i class="fa fa-fire hits"></i>`)
  }let customSection = new CustomSection()
  customSection.render()


  /* Catalog */
  let oldCatalog = document.querySelector(".mobile-navigation-wrapper")
  oldCatalog.classList.add("header-catalog")
  let newCatalog = oldCatalog.cloneNode(true)
  document.querySelector(".logo").insertAdjacentHTML("afterend", newCatalog.outerHTML)
  oldCatalog.remove()
  let headerCatalog = document.querySelector(".header-catalog")
  let headerCatalogLink = document.querySelector(".header-catalog a")
  headerCatalogLink.insertAdjacentHTML("beforeend", `<span class="catalog-title">Каталог</span>`)
  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

  listt.forEach((el) => {
    const tr = el.textContent;

    if(tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });

  const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
  const sourceCat = document.querySelectorAll(".common-home>.wrapper>.content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source")

  sourceCat.forEach( source => {
    const srcset = cat.getAttribute('srcset');
    let replacedSrc1 = srcset.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
    source.setAttribute('srcset', replacedSrc1);
  })

  imgCat.forEach(cat => {
    const src = cat.getAttribute('src');
    let replacedSrc2 = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
    cat.setAttribute('src', replacedSrc2);
  })
}

if(location.href.includes('/index.php?route=account/register')) {
  document.querySelector("#content > form > fieldset:nth-child(5) > div > div.col-sm-12 > div > div > input").classList.remove("btn-primary")
  document.querySelector("#content > form > fieldset:nth-child(5) > div > div.col-sm-12 > div > div > input").classList.add("btn-success")
}

if (location.href.includes('/checkout')) {
  $('.form_checkout').ready(function () {
    $('.checkbox>label').html('Согласен (-а) с условиями <b>ПУБЛИЧНОЙ ОФЕРТЫ</b>');
    document.querySelector(".checkbox").insertAdjacentHTML("afterend", '<div class="read_doc"><a href="/term-of-use/">Ознакомиться с публичной офертой</a></div>')
  })

  let newElement = document.createElement('form')
  newElement.classList.add("form_checkout")
  let oldElement = document.querySelector("#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout")
  newElement.innerHTML = oldElement.innerHTML
  oldElement.parentNode.replaceChild(newElement, oldElement)

}


