import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js";
import Fixes from "./fixes/fixes.js";

let fixes = new Fixes()
fixes.deleteUnnecessaryClasses()
fixes.updateImgCategories()

document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(1)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
  .insertAdjacentHTML("afterend",
    `<div class="category__card">
            <small class="count__products">Более 100 товаров</small>
            <a href="#" class="more__category">Смотреть</a>
          </div>`)

document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(2)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
  .insertAdjacentHTML("afterend",
    `<div class="category__card">
            <small class="count__products">Более 6000 товаров</small>
            <a href="#" class="more__category">Смотреть</a>
          </div>`)

document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(3)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
  .insertAdjacentHTML("afterend",
    `<div class="category__card">
            <small class="count__products">Более 2000 товаров</small>
            <a href="#" class="more__category">Смотреть</a>
          </div>`)

document.querySelector(".sf-menu>li[data-nav-part='home']").remove()
document.querySelector(".sf-menu>li[data-nav-part='5764']").remove()
document.querySelector(".sf-menu>li[data-nav-part='5763']").remove()
document.querySelector(".sf-menu>li[data-nav-part='5762']").remove()
