import InfoBlock from './components/InfoBlock.js';
import FormBasic from '../../../../components/FormBasic/FormBasic.js'

const aboutData = [
  {
    image: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Мы не хотим просто продавать одежду оптом',
    ph1: ' Мы хотим найти сильных партнеров! Партнеров, которые будут разделять наши принципы и подходы.',
    ph2: ' Спрос на наш бренд превышает текущее предложение, при этом для нас важнее не столько продать больше одежды, сколько предоставить нашим клиентам лучшие возможности и лучший сервис.'
  },
  {
    image: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/pina-messina-qQKv7r1BaRw-unsplash_1_qf58wt.png',
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

const senderData = [
  {
    title: 'Остались вопросы?',
    content: 'Для подробной консультации по подбору идеального для Вас корсета оставьте заявку.',
  }
]


if (location.href.includes('/for-business')) {
  const lastSection = document.querySelector('#content > .row > div');

  lastSection.insertAdjacentHTML('beforeEnd', new InfoBlock(aboutData).render());
  new FormBasic(lastSection, 'beforeend', senderData).render();
}