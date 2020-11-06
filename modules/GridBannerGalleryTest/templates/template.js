const bannerContent = [
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
  {
    class: 'grid-banner-2',
    link: 'детская-одежда/для-девчонок/',
    title: 'Детская одежда',
    subtitle: 'Для девочек',
    button: {
      title: 'Скидка 30%',
      text: 'на всю одежду по промокоду SALE30',
    },
  },
];

function template() {
  bannerContent.map(
    (data) => `
      <div class="grid-banner ${data.class}">
        <a href="${data.link}">
          <div class="grid-banner__item">
            <div class="grid-banner__text-container">
              <h2 class="grid-banner__text-container_title">${data.title}</h2>
              <p class="grid-banner__text-container_subtitle">${data.subtitle}</p>
                <button class="grid-banner__text-container_discount">
                  <h3 class="grid-banner__text-container_discount_title">${data.button.title}</h3>
                  <span class="grid-banner__text-container_discount_subtitle"
                    >${data.button.text}</span
                  >
                </button>
            </div>
          </div>
        </a>
      </div>`,
  );
}

export default function parentBanner() {
  return `<div class="banner-gallery">${template()}</div>`;
}
// const template = `
// <div class="banner-gallery">
// <div class="grid-banner grid-banner-2">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item">
// <div class="grid-banner__text-container">
// <h2 class="grid-banner__text-container_title">Детская одежда</h2>
// <p class="grid-banner__text-container_subtitle">для мальчиков</p>
// <button class="grid-banner__text-container_discount">
// <h3 class="grid-banner__text-container_discount_title">Скидка 30%</h3>
// <span class="grid-banner__text-container_discount_subtitle"
// >на всю одежду по промокоду SALE30</span
// >
// </button>
// </div>
// </div>
// </a>
// </div>

// <div class="grid-banner__two-item">
// <div class="grid-banner grid-banner-3">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item">
// <div class="grid-banner__text-container">
// <h2 class="grid-banner__text-container_title">Мягкие игрушки</h2>
// <button class="grid-banner__text-container_discount">
// <h3 class="grid-banner__text-container_discount_title">Скидка 30%</h3>
// <span class="grid-banner__text-container_discount_subtitle"
// >с 1 июля по 1 сентября 2020</span
// >
// </button>
// </div>
// </div>
// </a>
// </div>
// <div class="grid-banner grid-banner-4">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item"></div>
// </a>
// </div>
// </div>

// <div class="grid-banner grid-banner-5">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item">
// <div class="grid-banner__text-container">
// <h2 class="grid-banner__text-container_title">Электронные книги</h2>
// <p class="grid-banner__text-container_subtitle">для детей</p>
// </div>
// </div>
// </a>
// </div>

// <div class="grid-banner__two-item">
// <div class="grid-banner grid-banner-6">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item">
// <div class="grid-banner__text-container">
// <img class="grid-banner__img-title" src="https://res.cloudinary.com/gz-company/image/upload/v1604306396/Interno/1280px-Barbie_Logo_1_jrr1g0.png" alt="Barbie">
// <p class="grid-banner__text-container_subtitle">куклы для девочек</p>
// </div>
// </div>
// </a>
// </div>
// <div class="grid-banner grid-banner-7">
// <a href="детская-одежда/для-девчонок/">
// <div class="grid-banner__item">
// <div class="grid-banner__text-container">
// <h2 class="grid-banner__text-container_title">Другие товары</h2>
// </div>
// </div>
// </a>
// </div>
// </div>

// </div>
// `;
