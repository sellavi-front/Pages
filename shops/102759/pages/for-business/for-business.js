import InfoBlock from './components/InfoBlock.js';

const aboutData = [
  {
    img: 'https://res.cloudinary.com/gz-company/image/upload/v1606228219/Miru/Miru_1_day_Flat_Pack_pattern-01_1_cg520r.png',
    title: 'Мы не хотим просто продавать одежду оптом',
    ph1: ' Мы хотим найти сильных партнеров! Партнеров, которые будут разделять наши принципы и подходы.',
    ph2: ' Спрос на наш бренд превышает текущее предложение, при этом для нас важнее не столько продать больше одежды, сколько предоставить нашим клиентам лучшие возможности и лучший сервис.'
  },
  {
    img: 'https://res.cloudinary.com/gz-company/image/upload/v1606228219/Miru/Miru_1_day_Flat_Pack_pattern-01_1_cg520r.png',
    title: 'Условия',
    ph1: `
        <ol class="info-block__list">
          <li>Современный дизайн</li>
          <li>Современный дизайн</li>
          <li>Современный дизайн</li>
          <li>Современный дизайн</li>
          <li>Современный дизайн</li>
        </ol>
      `,
    ph2: ''
  }
]

if (location.href.includes('/for-business')) {
  document.querySelector('#content > .row > div').insertAdjacentHTML('beforeEnd', new InfoBlock(aboutData).render());
}