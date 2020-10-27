/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

window.onload = () => {
  if (
    location.href !== 'https://store101280.sellavi.com/?from_admin' ||
    location.href !== 'https://store101280.sellavi.com/'
  ) {
    const categoriesContainer = document.querySelector('.latest-section > .container');
    if (categoriesContainer !== null) {
      const listDiv = document.createElement('div');
      listDiv.setAttribute('id', 'app');
      categoriesContainer.prepend(listDiv);
      const newCont = new Vue({
        el: '#app',
        data: {
          categories: [
            {
              title: 'Коллекции',
              link: 'https://store101280.sellavi.com/collection/',
              img:
                'https://res.cloudinary.com/gz-company/image/upload/v1600417173/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_1_highw1.png',
              text:
                'Каждая модель должна была желанной, и попасть в тот гардероб, где будет максимально сочетаться со всем. Поэтому мы так много сил и времени вкладываем в разработку, чтобы выверить каждый шов и каждую деталь.',
            },
            {
              title: 'Женская',
              link: 'https://store101280.sellavi.com/woman/',
              img:
                'https://res.cloudinary.com/gz-company/image/upload/v1600417287/df223e9bb4598e62f7de836b02a7d311_1_ajeds4.jpg',
              text:
                'Мы воплотили наше представление о комфорте и создали вещи, призванные превратить каждый день в праздник. Нам не важно, дома ли вы, на корпоративной zoom-вечеринке или на приеме у королевы Великобритании. Чувствуйте себя удобно и великолепно одновременно.',
            },
            {
              title: 'Новые поступления',
              link: 'https://store101280.sellavi.com/new-arrival/',
              img:
                'https://res.cloudinary.com/gz-company/image/upload/v1600417174/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_2_rgejvv.png',
              text: '',
            },
            {
              title: 'Мужская',
              link: 'https://store101280.sellavi.com/man/',
              img:
                'https://res.cloudinary.com/gz-company/image/upload/v1600417763/d94c4127453c1922f3a10e93b6e5fb8e_1_e80mis.jpg',
              text:
                'Дополните свой гардероб интересными новинками или создайте радикально новый в духе AbsoluteFashion.',
            },
          ],
        },
        template: `
          <div class="row">
          <div class="custom-categories__banner">
              <div class="custom-categories__title-container">
                   <h4 class="custom-categories__title">Платья</h4>
                   <a href="#" class="custom-categories__link">Смотреть все</a>
              </div>
          </div>
          <div class="custom-categories__item" v-for="category of categories">
              <div class="custom-categories__title-container">
                  <h4 class="custom-categories__title">{{ category.title }}</h4>
                  <p class="custom-categories__ph">
                     {{ category.text }}
                   </p>
                   <a :href="category.link" class="custom-categories__link">Смотреть все</a>
               </div>
              <img :src="category.img">
          </div>
        </div>
      `,
      });
    }

    const header = document.querySelector(
      '#undefined-sticky-wrapper > header > div.header-wrapper',
    );
    header.style.background = 'rgba(' + '226, 149, 120, 1)';
  } else {
    window.addEventListener('scroll', (e) => {
      const header = document.querySelector(
        '#undefined-sticky-wrapper > header > div.header-wrapper',
      );

      const idx = parseInt((pageYOffset / 1000) * 10);

      if (pageYOffset <= 1000) {
        header.style.background = `rgba(226, 149, 120, .${idx}`;
      }
    });
  }

  /* ======== AUTO CHANGE COLOR CHOISE ======== */

  const colors = {
    'красный': 'red',
    'зеленый': 'green',
    'зелёный': 'green',
    'оранжевый': 'orange',
    'черный': 'black',
    'чёрный': 'black',
    'белый': 'white',
    'коричневый': '#964b00',
  };

  const rad = document.querySelectorAll('.selectpicker-wrapper>div');

  rad.forEach((el) => {
    const label = el.querySelector('.custom-control-label');
    const lab = label.textContent.toLowerCase();

    label.style.background = colors[lab];
  });

  document
    .querySelector('#product > div.form-group.col-sm-6.required.option-group > div > button')
    .addEventListener('click', () => {
      const dropDown = document.querySelectorAll('#bs-select-1 > ul > li');

      dropDown.forEach((el) => {
        const label = el.querySelector('.dropdown-item');
        const lab = label.textContent.toLowerCase();

        label.style.background = colors[lab];
      });
    });

  /* ================ */

  const search = document.querySelector('#search');
  search.addEventListener('mouseover', (e) => {
    e.target.closest('#search').style.cssText =
      'max-width: 170px !important; border-bottom: 1px solid white;';
  });

  search.addEventListener('mouseout', (e) => {
    e.target.closest('#search').style.cssText = 'max-width: 24px; border-bottom: none;';
  });

  const clone = document
    .querySelector('#undefined-sticky-wrapper > header > div.navigation-wrapper > div > nav')
    .cloneNode(true);

  const logo = document
    .querySelector(
      '#undefined-sticky-wrapper > header > div.header-wrapper > div.container > div.logo',
    )
    .cloneNode(true);

  document
    .querySelector(
      '#undefined-sticky-wrapper > header > div.header-wrapper > div.container > div.logo',
    )
    .insertAdjacentElement('afterend', clone);

  document.querySelector('.footer_content_text').classList.remove('col-12');

  const container = document.querySelector(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container',
  );

  container.classList.remove('container');
  container.classList.add('container-fluid');

  const containerFluid = document.querySelector(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid',
  );

  const containerIco = document.createElement('div');
  containerIco.classList.add('container-ico');

  const cart = document.querySelector(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > div.header-cart.sticky',
  );

  containerFluid.append(containerIco);
  containerIco.append(search, cart);

  const header = document.querySelector('#undefined-sticky-wrapper > header > div.header-wrapper');

  const subMenuEl = document.querySelectorAll(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > nav > ul > li.flexy.has_children > ul',
  );

  const objCopy = Object.assign([], subMenuEl);

  const menuHasChildren = document.querySelectorAll(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > nav > ul > .has_children',
  );

  function createContainer(clss, list, id) {
    const cont = document.createElement('div');
    const containerInner = document.createElement('div');

    cont.classList.add(clss);
    containerInner.classList.add('container-fluid');

    cont.setAttribute('data-nav-part', id);

    header.append(cont);
    cont.append(containerInner);
  }

  function addChildList(element) {
    element.forEach((el, idx) => {
      const attr = objCopy[idx].closest('li').getAttribute('data-nav-part');
      if (el.getAttribute('data-nav-part') === attr) {
        el.querySelector('.container-fluid').append(objCopy[idx]);
      }
    });
  }

  const customCat = document.querySelectorAll('.custom-categories__item');
  const headMenu = document.querySelectorAll(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > nav > ul > li',
  );
  const newCustomCat = Object.assign([], customCat);
  const newHeadMenu = Object.assign([], headMenu);

  const titleAndImg = newCustomCat.map((el) => {
    const title = el.querySelector('h4').textContent;
    const img = el.querySelector('img').getAttribute('src');

    const obj = { name: title, image: img };

    return obj;
  });

  const menuListObj = newHeadMenu.map((el) => {
    const title = el.querySelector('a').textContent;
    return title.trim();
  });

  const deleteHref = document.querySelectorAll(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.container-fluid > nav > ul > .has_children > a',
  );

  deleteHref.forEach((el) => {
    el.removeAttribute('href');
  });

  menuHasChildren.forEach((el, idx) => {
    const id = el.getAttribute('data-nav-part');
    createContainer('header_sub', objCopy, id);
  });

  const headerSub = document.querySelectorAll('.header_sub');
  const headerSubSingle = document.querySelector('.header_sub');
  const copyHeaderSub = Object.assign([], headerSub);
  const containerFluidMenu = document.querySelector(
    '#undefined-sticky-wrapper > header > div.header-wrapper > div.header_sub> div',
  );

  addChildList(copyHeaderSub);

  menuHasChildren.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
      const atr = e.target.closest('li').getAttribute('data-nav-part');
      const data = headerSub[idx].getAttribute('data-nav-part');
      const parent = headerSub[idx];

      if (atr === data && !parent.matches('.show')) {
        headerSub[idx].classList.add('show');
        document.querySelector('#undefined-sticky-wrapper > header').classList.add('opened');
      }

      header.addEventListener('mouseleave', () => {
        headerSub[idx].classList.remove('show');
        document.querySelector('#undefined-sticky-wrapper > header').classList.remove('opened');
      });
    });
  });

  const footer = document.querySelector('.footer');

  const feedBack = `<section class="feedback">
        <form name="subscribe-form" action="/subscribe/" method="post">
            <input type="hidden" name="rubric_name" value="">
            <input type="hidden" name="promo" value="">
            <div class="form-dispatch" id="callback">
                <div class="container_form d-flex flex-wrap flex-column">
                    <h2 class="feedback__text-center">РАССЫЛКА</h2>
                    <p class="feedback__text_form">Секретные распродажи, уникальные акции и интересные статьи только для подписчиков рассылки</p>
                    <fieldset class="form-group">
                        <label for="email" class="hidden">EMAIL</label>
                        <input class="form-control" type="text" id="email" autocomplete="EMAIL" name="email" value="" placeholder="Введите свой e-mail">
                    </fieldset>
                    <fieldset class="form-group">
                        <button class="form-dispatch__btn" type="submit" name="send" value="Подписаться">
                            <div class="form-dispatch__text">Подписаться</div>
                        </button>
                    </fieldset>
                </div>
            </div>
        </form>
    </section>`;

  footer.insertAdjacentHTML('beforebegin', feedBack);

  // VIDEO

  const bannerContainer = document.querySelector('.custom_banner');
  const srcVideo =
    ' https://res.cloudinary.com/gz-company/video/upload/v1600436766/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_1_zohett.mp4';

  const videoElem = `<video class="video-banner" src="${srcVideo}" autoplay loop playsinline muted></video>`;
  bannerContainer.insertAdjacentHTML('beforeend', videoElem);
};
