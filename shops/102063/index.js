import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js'
import SmallCategory from '../../components/SmallCategory/SmallCategory.js'

import '../../fixes/fixes.js';


if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>.container>.header-cart');
  const linkcatalog = document.querySelector('.flexy.has_children:first-child');
  const pageSection = document.querySelector('.page-section');
  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTemplate(headerWrapper);
  hideCart.remove();

  linkcatalog.insertAdjacentHTML('afterbegin', `<i class="fas fa-bars"></i>`);
  pageSection.insertAdjacentHTML('afterbegin', `
  <div class="adv_list small_banners">
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_12702" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a href="/catalog/filtry-dlya-kvartiry/">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/515/O4ISTKA_KVARTIRA.jpg"
                data-src="/upload/iblock/515/O4ISTKA_KVARTIRA.jpg"
                alt="Очистка воды в квартире"
                title="Очистка воды в квартире"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_12700" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a href="/catalog/ochistka-vody-v-kottedzhe/">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/c28/O4ISTKA_ZAGORODNIYDOM.jpg"
                data-src="/upload/iblock/c28/O4ISTKA_ZAGORODNIYDOM.jpg"
                alt="Очистка воды в загородном доме и коттедже"
                title="Очистка воды в загородном доме и коттедже"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_12704" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a href="/catalog/filtry-dlya-ofisa-i-horeca/purifayery/">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/ef7/O4ISTKA_OFFICE.jpg"
                data-src="/upload/iblock/ef7/O4ISTKA_OFFICE.jpg"
                alt="Очистка воды в офисе"
                title="Очистка воды в офис"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_12748" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a href="/catalog/filtry-dlya-ofisa-i-horeca/dlya-kafe-i-restoranov/">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/144/filtri_dlya_kafe.jpg"
                data-src="/upload/iblock/144/filtri_dlya_kafe.jpg"
                alt="Очистка воды в кафе и ресторане"
                title="Очистка воды в кафе и ресторане"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_13978" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a href="/services/">
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/cf4/MSS.jpg"
                data-src="/upload/iblock/cf4/MSS.jpg"
                alt="МСС"
                title="МСС"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div id="bx_433896247_13979" class="item">
        <div class="img shine">
          <div class="img_inner">
            <a
              href="/catalog/ochistka-vody-dlya-predpriyatiy-i-proizvodstv/vodopodgotovka-dlya-promyshlennosti/"
            >
              <img
                data-lazyload=""
                class="lazyloaded"
                src="/upload/iblock/4ba/PROM_OBORUDOVANIE.jpg"
                data-src="/upload/iblock/4ba/PROM_OBORUDOVANIE.jpg"
                alt="Водоподготовка для промышленности"
                title="Водоподготовка для промышленности"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `)
}

