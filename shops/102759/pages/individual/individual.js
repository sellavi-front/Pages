import InfoCard from './components/InfoCard.js';

const data = [
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  },
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  },
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  }
]


if (location.href.includes('/individual')) {
  const lastSection = document.querySelector('#content > .row > div');
  const pageHeader = document.querySelector(".page-header > h1");
  pageHeader.textContent = 'Пошив одежды на заказ';
  pageHeader.insertAdjacentHTML('afterend', `<p class="page-header__subtitle">Действительно качественный пошив вашей одежды</p>`)

  lastSection.insertAdjacentHTML('beforeend', new InfoCard(data).render());
}