import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js";
import Fixes from "./fixes/fixes.js";

let fixes = new Fixes()
fixes.deleteUnnecessaryClasses()
fixes.updateImgCategories()

document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(1)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
  .insertAdjacentHTML("afterend",
    `<div class="card">
            <small class="count__products">Более 2000 товаров</small>
            <a href="#" class="more__category">Смотреть</a>
          </div>`)