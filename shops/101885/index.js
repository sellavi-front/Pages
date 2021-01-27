window.onload = () => {

    /* Trasnlation footer */
    const widget = $('.footer-widgets>.container>.row>.col-md-3:first>.widget')
    const widTitle = widget.find('.widget-title');
    const widCat = widget.find('.widget-categories>ul>li:first-child>a');
    let textTrans = 'About us ';
    let textRus = 'О нас';

    if (widTitle.html() === textTrans || widCat.html() === textTrans) {
      widTitle.text(textRus);
      widCat.text(textRus);
    }
    /* End */

    /* Custom Banner */
    let bannerMainEl = document.querySelector(".custom_banner")
    let bannerMainLayout = `
        <div class="banner__main__block">
            <div class="banner__main__img">

            </div>
            <div class="banner__main__description">
                <h1>Ателье Красоты</h1>
                <p>Безупречная эко-косметика</p>
                <a class="text-center" href="https://atelye1.com/about-master/">Подробнее</a>
            </div>
        </div>
    `

    if(location.href === 'https://atelye1.com/' || location.href === 'https://atelye1.com/?from_admin') {
      console.log(321)
      bannerMainEl.insertAdjacentHTML("afterbegin", bannerMainLayout)
    }



    if(location.href === 'https://atelye1.com/about-master/') {
      let aboutMasterLayout = `
        <div class="description">
          <div class="description__item">
            <p>Я - Ольга, косметолог-эстетист. </p>
            <p>Я помогаю справляться с эстетическими проблемами,с помощью косметических процедур и индивидуального
            подбора профессиональной и эко косметики.  Для меня моя работа-не только: пилинг, массаж и чистка лица. В моем кабинете вы получаете
            уверенность в себе,положительные эмоции и релакс.</p>
            <p>Будьте прекрасны! Жду вас.</p>
          </div>
          <div class="description__item">
            <img class="container__about__master__box" src="https://res.cloudinary.com/rostislavsellavi/image/upload/v1605521021/WhatsApp_Image_2020-11-14_at_09.03.11_3_gfm8v1.jpg"/>
          </div>
        </div>
        <div class="text-center"><h3>Мои услуги</h3></div>
      `

      document.querySelector("#content").insertAdjacentHTML("afterbegin", aboutMasterLayout)
          let services = document.querySelector("#content > div.text-center")
          services.insertAdjacentHTML("afterend", `
            <ul class="cards">
              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">Ручная чистка кожи лица</div>
                    <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-1/"><b>Подробнее</b></a>
                  </div>
                </div>
              </li>

              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">Ультразвуковая чистка</div>
                    <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-2/"><b>Подробнее</b></a>
                  </div>
                </div>
              </li>


                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">Карбокситерапиия</div>
                      <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-3/"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">Миндальный пилинг для лица</div>
                      <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-4/"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">Отбеливающий пилинг лица</div>
                      <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-5/"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">Пилинг-гель с экстрактом Папайи</div>
                      <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-6/"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">Талассотерапия для лица и зоны декольте</div>
                      <a href="https://atelye1.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-7/"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>
            </ul>
          `)
    }
}