export const solutionObj = {
  cafe: {
    title: 'Кафе',
    countPlaces: [
      '<p>Кафе на 10 мест</p>',
      '<p>Кафе на 30 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/daan-evers-tKN1WXrzQ3s-unsplash_1_qllwp1.png'
  },

  bar: {
    title: 'Бары',
    countPlaces: [
      '<p>Бар на 20 мест</p>',
      '<p>Бар на 40 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/helena-yankovska-sJOy9pveFbU-unsplash_1_yxbj2t.png'
  },

  pizza: {
    title: 'Пиццерия',
    countPlaces: [
      '<p>Пиццерия на 20 мест</p>',
      '<p>Пиццерия на 40 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/peter-bravo-de-los-rios-K70I7ecmXqg-unsplash_1_d3xkmq.png'
  },

  fastFood: {
    title: 'Кафе фаст-фуд',
    countPlaces: [
      '<p>Кафе "Бургер" на 20 мест</p>',
      '<p>Прилавок Шаурма</p>',
      '<p>Кафе фаст-фуд на 40 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092993/jonathan-borba-8l8Yl2ruUsg-unsplash_1_jz7bub.png'
  },

  diningHall: {
    title: 'Столовые',
    countPlaces: [
      '<p>Столовая на 50 мест</p>',
      '<p>Столовая на 100 мест</p>',
      '<p>Столовая на 200 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/medina-catering-AdtqezIqv7c-unsplash_1_jrmlel.png'
  },

  restaurants: {
    title: 'Рестораны',
    countPlaces: [
      '<p>Ресторан на 50 мест</p>',
      '<p>Ресторан на 100 мест</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/robert-mathews-xXaLfz6V9rQ-unsplash_1_1_zkvp0f.png'
  },

  lines: {
    title: 'Линии раздач',
    countPlaces: [
      '<p>Линия раздачи "Патша"</p>',
      '<p>Линия раздачи "Аста"</p>',
      '<p>Линия раздачи "Премьер"</p>',
      '<p>Линия раздачи "Ривьера"</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093006/5_1_nnuxdd.png'
  },

  shops: {
    title: 'Магазины',
    countPlaces: [
      '<p>Магазин "Прилавок-продавец"</p>',
      '<p>Магазин "Мини-маркет"</p>'
    ],
    buttonGetSolution: [
      "<a>Получить готовое решение</a>",
      "<a>Получить готовое решение</a>"
    ],
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/daan-evers-tKN1WXrzQ3s-unsplash_1_qllwp1.png'
  },
}



let renderSolutions = () => {
  let solutionsArr = Object.values(solutionObj)

  return solutionsArr.map(item => {
    return `
    <div class="solutions__row">
      <div class="solutions__column">
        <h1>${item.title}</h1>
        ${item.countPlaces.join('')}
      </div>

      <div class="solutions__column_links">
        ${item.buttonGetSolution.join('')}
      </div>

      <div class="solutions__column">
        <img src="${item.img}" alt="img" />
      </div>
    </div>
    `
  }).join('')
}

export default renderSolutions



